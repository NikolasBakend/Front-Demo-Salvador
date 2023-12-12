import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DocumentsService } from 'src/app/services/apiDocuments/documents.service';
import { environment } from 'src/environments/environment';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})

export class VerificationComponent {

  uploadedFilesPersonal: any[] = [];
  numUploadedFilesPersonal: number = 0;
  maxFilesPersonal: number = 4;
  files: File[] = [];
  nameClient : string = '';
  showUploadedFilesList: boolean = false;
  private apiUrl = environment.apiEndpoint + '/upload';
  formDocuments: FormGroup;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private documentsService: DocumentsService,
    private http: HttpClient,
    private formBuilder: FormBuilder

  ) {

  }

  ngOnInit(): void {
    this.formDoc();
  }

  formDoc(){
    this.formDocuments = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(3)]]
    })

  }

  handleFileSelect(event: any): void {
    const files = event?.files;

    if (files && files.length > 0) {
      this.files = Array.from(files)
    }
  }

  onUpload1(event: UploadEvent) {
    // Verificar si se excede el límite de archivos en doc1[]
    if (event.files.length <= this.maxFilesPersonal) {
      // Actualizar el número de archivos cargados en doc1[]
      this.numUploadedFilesPersonal = event.files.length;
      this.handleUploadEvent(event, 'uploadedFilesPersonal');
    } else {
      // Mostrar un mensaje de error si se excede el límite
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: `Se permiten como máximo ${this.maxFilesPersonal} archivos en Documentos Personales.`,
      });
    }
  }


  private handleUploadEvent(event: UploadEvent, targetProperty: string) {
    for (let file of event.files) {
      this[targetProperty].push(file);
      this.files.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Archivos cargados satisfactoriamente', detail: '' });
  }

  showUploadedFiles() {
    this.showUploadedFilesList = !this.showUploadedFilesList;
  }

  sendDataDocuments() {
    this.nameClient = this.formDocuments.get('fullname')?.value;
    if (this.files.length > 0) {
      const formData = new FormData();
      this.files.forEach((file) => {
        formData.append('files', file, file.name);
      });

      const folderName = this.nameClient;

      // Enviar el nombre de la carpeta al backend
      formData.append('folderName', folderName);

      this.http.post(this.apiUrl, formData).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Archivos subidos satisfactoriamente',
          });
          setTimeout(() => this.router.navigateByUrl('/login'), 1000);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error subiendo los archivos',
            detail: 'Fallo en el servicio'
          });
        }
      });
    }else {
      // Mostrar un mensaje de error si no se cumple el número mínimo
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Debe cargar al menos un archivo.',
      });
    }

  }
}
