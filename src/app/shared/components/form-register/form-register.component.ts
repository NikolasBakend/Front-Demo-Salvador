import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/apiLogin/login.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  formRegister: FormGroup;
  captcha: string;
  res: string;
  captchaResolved: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private router: Router,)
    {
      this.loginForm();
      this.captcha = '';
      this.res = '';
    }

    ngOnInit() {

    }

  loginForm(){
    this.formRegister = this.formBuilder.group({
      nameUser: ['', [Validators.required,  Validators.minLength(3)]],
      pass: ['', [Validators.required]],
    })
  }


  register(){
    setTimeout(() => this.router.navigateByUrl('/informacion-cliente/info-personal'), 500);
  }

  // Aquí se usa el método postData
  sendDataRegister() {

     const nameUser = this.formRegister.get('nameUser')?.value;
     const pass =  this.formRegister.get('pass')?.value;

    this.loginService.getLogin(nameUser, pass).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Información guardada correctamente',
        });

        this.formRegister.reset();
        setTimeout(() => this.router.navigateByUrl('/dashboard'), 500);

      }, error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fallo en el sistema',
          detail: 'Error consultando datos de ingreso'
      });

        this.formRegister.reset();
      }
  });
}}
