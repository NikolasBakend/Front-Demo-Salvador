import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public isClassEnabled = false;
  showNotifications = false;
  items : MenuItem[];
  displaySidebar = false;
  menuStyles = {
    'backgroundColor': 'none',
    'color': 'white'
  };

  constructor(){

  }

  ngOnInit() {
    this.items = [
      {
        label: '',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
        ],
      },
      {
        label: 'Mi Billetera',
        items: [
          {
            label: 'Ir a Billetera',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
        ],
      },
      {
        label: 'Mis Transacciones',
        items: [
          {
            label: 'Enviadas',
            icon: 'pi pi-refresh',
            command: () => {
             // this.update();
            },
          },
          {
            label: 'Recibidas',
            icon: 'pi pi-times',
            command: () => {
            //  this.delete();
            },
          },
          {
            label: 'Depositos',
            icon: 'pi pi-times',
            command: () => {
            //  this.delete();
            },
          },
          {
            label: 'Retiros',
            icon: 'pi pi-times',
            command: () => {
              //this.delete();
            },
          },
        ],
      },
      {
        label: 'Mi Cuenta',
        items: [
          {
            label: 'Verificar cuenta',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
        ],
      },
      {
        label: 'Mi Sesion',
        items: [
          {
            label: 'Ir a pagina web',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'Salir',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
        ],
      },
    ];

}


  efectos(){
    this.isClassEnabled = !this.isClassEnabled;
}
}
