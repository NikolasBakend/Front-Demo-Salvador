import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/apiRegister/register.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { ApiDropDownService } from 'src/app/services/apiDropDown/drop-down.service';
import { async, asyncScheduler, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.css']
})
export class InfoPersonComponent implements OnInit {
  formRegisterPersonal: FormGroup;
  personType: string;
  disabledNit = true;
  checkTerm: boolean;
  mailUmonei = "contacto@salvadorsv.com"
  countryCodes: any[];
  codePrueba: any;
  codeMoney: any[];
  documentType: any[];
  maxDate: Date;
  invalidDates: Date[];
  minDate: Date;
  country: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: RegisterService,
    private messageService: MessageService,
    private config: PrimeNGConfig,
    private router: Router,
    private dropDownService: ApiDropDownService,
  ) {
    this.infolist();
  }

  ngOnInit() {
    this.formPersonal();
    this.minMaxDate();
  }

  validTerminos() {
    this.checkTerm = true;
  }

  formPersonal() {
    this.formRegisterPersonal = this.formBuilder.group({
      nameUser: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/), Validators.minLength(3)]],
      docType: ['', [Validators.required]],
      identification: ['', [Validators.required, Validators.minLength(8)]],
      country: ['', null],
      city: ['', null],
      address: ['', [Validators.required]],
      passport: ['', [Validators.required]],
      celphoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      acceptTerm: ['', [Validators.required]],
      codePhone: ['', null],
      codeMoney: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      birtDate: ['', [Validators.required]],
    })
  }

  //Metodo creado para cargar las banderas utilizadas en el indicativo telefonico
  getFlagClass(code: string): string {
    return `flag-icon flag-icon-${code.toLowerCase()}`;
  }


  //Metodo para darle formato en español al calendario
  formatEsCalendar() {
    this.config.setTranslation({
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
    });

  }

  minMaxDate() {
    let today = new Date();
    let year = today.getFullYear() - 18;
    this.maxDate = new Date();
    this.maxDate.setFullYear(year);
  }

  infolist() {

    this.dropDownService.getCurencies().subscribe({
      next: respCurencies => {
        this.codeMoney = respCurencies;
      }, error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al consultar los tipos de moneda',
        });
      }

    });


    this.dropDownService.getCountryCodes().subscribe({
      next: countryCodesData => {
        this.countryCodes = countryCodesData;
      },
      error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al consultar los indicativos de los paises',
        });
      }
    });

    this.dropDownService.getDocumentsType().subscribe({
      next: documentTypeData => {
        this.documentType = documentTypeData;
      },
      error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al consultar los tipos de documentos',
        });
      }
    });

  }

  sendDataPersonal() {
    if (this.formRegisterPersonal.valid) {
      const dataToSend = {
        nameUser: this.formRegisterPersonal.get('nameUser')?.value,
        identification: this.formRegisterPersonal.get('identification')?.value,
        username: this.formRegisterPersonal.get('userName')?.value,
        password: this.formRegisterPersonal.get('pass')?.value,
        country: this.country?.code,
        currency: this.formRegisterPersonal.get('codeMoney')?.value.name,
        firstName: this.formRegisterPersonal.get('nameUser')?.value,
        lastName: this.formRegisterPersonal.get('lastName')?.value,
        address: this.formRegisterPersonal.get('address')?.value,
        city: this.formRegisterPersonal.get('city')?.value,
        birthDate: this.formatDate(this.formRegisterPersonal.get('birtDate')?.value),
        documentType: this.formRegisterPersonal.get('docType')?.value.name,
        documentNumber: this.formRegisterPersonal.get('identification')?.value,
        passportNumber: this.formRegisterPersonal.get('passport')?.value,
        countryCode: this.codePrueba?.dial_code,
        phoneNumber: this.formRegisterPersonal.get('celphoneNumber')?.value,
        email: this.formRegisterPersonal.get('email')?.value,
      }


      this.apiService.postDataUserRegister(dataToSend).subscribe(
        response => {

          if (response.includes('Autenticación Completada')) {
            this.messageService.add({
              severity: 'success',
              summary: 'Información personal guardada con éxito',
            });
            this.formRegisterPersonal.reset();
            setTimeout(() => this.router.navigateByUrl('/informacion-cliente/verificacion'), 500);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error del Sistema',
              detail: 'Error al insertar datos'
            });
          }
        }
      )
    }
  }

  formatDate(date: string | Date): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
