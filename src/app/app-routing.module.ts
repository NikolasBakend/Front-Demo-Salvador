import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './shared/components/form-register/form-register.component';
import { StepFormRegisterComponent } from './shared/components/step-form-register/step-form-register.component';
import { InfoPersonComponent } from './shared/components/step-form-register/info-person/info-person.component';
import { DocumentsInfoComponent } from './shared/components/step-form-register/documents-info/documents-info.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { DetaildepositoComponent } from './shared/components/dashboard/Detail-deposito/detail-deposito.component';
import { VerificationComponent } from './shared/components/verification/verification.component';
import { DetailWithdrawalsComponent } from './shared/components/dashboard/detail-withdrawals/detail-withdrawals.component';
import { TransactionsReceivedComponent } from './shared/components/dashboard/transactions-received/transactions-received.component';
import { TransactionsSentComponent } from './shared/components/dashboard/transactions-sent/transactions-sent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: FormRegisterComponent },
  {
    path: 'informacion-cliente',
    component: StepFormRegisterComponent,
    children: [
      {
        path: 'info-personal',
        component: InfoPersonComponent
      },
      {
        path: 'verificacion',
        component: VerificationComponent
      },
    ]
  },

  { path: 'dashboard', component: DashboardComponent,
   children: [
     {
      path: 'detalle-deposito',
      component: DetaildepositoComponent
     },

     {
      path: 'detalle-retiros',
      component: DetailWithdrawalsComponent
     },

     {
      path: 'transaciones-recibidas',
      component: TransactionsReceivedComponent
     },

     {
      path: 'transaciones-enviadas',
      component: TransactionsSentComponent
     },

    ]
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }); se comenta para probar la rutas
