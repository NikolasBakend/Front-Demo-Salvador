import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Inicio servicio
import { CargarScriptsService } from '../cargar-scripts.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha'
// Fin servicio
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AccordionModule } from 'primeng/accordion';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { EmailService } from '../services/email.service';
import { StepFormRegisterComponent } from './components/step-form-register/step-form-register.component';
import { InfoPersonComponent } from './components/step-form-register/info-person/info-person.component';
import { DocumentsInfoComponent } from './components/step-form-register/documents-info/documents-info.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { LocalStorageService } from '../services/localStorage.service';
import { MessageLocalService } from '../services/messageLocal.service';
import { CheckboxModule } from 'primeng/checkbox';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DetaildepositoComponent } from './components/dashboard/Detail-deposito/detail-deposito.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DepositosMockService } from '../services/DepositosMock.service';
import { VerificationComponent } from './components/verification/verification.component';
import { PasswordModule } from 'primeng/password';
import { DetailWithdrawalsComponent } from './components/dashboard/detail-withdrawals/detail-withdrawals.component';
import { TransactionsReceivedComponent } from './components/dashboard/transactions-received/transactions-received.component';
import { TransactionsSentComponent } from './components/dashboard/transactions-sent/transactions-sent.component';

@NgModule({
  declarations: [
    FormRegisterComponent,
    StepFormRegisterComponent,
    InfoPersonComponent,
    DocumentsInfoComponent,
    DashboardComponent,
    MenuComponent,
    VerificationComponent,
    DetaildepositoComponent,
    DetailWithdrawalsComponent,
    TransactionsReceivedComponent,
    TransactionsSentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ButtonModule,
    ScrollPanelModule,
    StyleClassModule,
    MenubarModule,
    BrowserModule,
    CardModule,
    ReactiveFormsModule,
    DialogModule,
    TooltipModule,
    ToastModule,
    MessagesModule,
    RadioButtonModule,
    FormsModule,
    SpeedDialModule,
    StepsModule,
    ConfirmDialogModule,
    AccordionModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    DividerModule,
    RatingModule,
    FileUploadModule,
    FieldsetModule,
    CheckboxModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    TableModule,
    TagModule,
    PasswordModule
  ],
  exports: [
    FormRegisterComponent,
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
   providers: [
    CargarScriptsService,
    MessageService,
    ConfirmationService,
    EmailService,
    LocalStorageService,
    MessageLocalService,
    DepositosMockService
  ],
  bootstrap: [AppComponent]
})

export class SharedModule {}
