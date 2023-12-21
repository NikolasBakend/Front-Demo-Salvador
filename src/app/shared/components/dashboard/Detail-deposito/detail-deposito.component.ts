import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TransfersClient } from 'src/app/domain/models/transfers-clients';

import { DepositosMockService } from 'src/app/services/DepositosMock.service';
import { Table } from 'primeng/table'
import { Column } from 'src/app/domain/models/column';
import { ExportColumn } from 'src/app/domain/models/export';
import { TransfersService } from 'src/app/services/apiTransfers/transfers.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';


@Component({
  selector: 'app-detail-deposito',
  templateUrl: './detail-deposito.component.html',
  styleUrls: ['./detail-deposito.component.css']
})
export class DetaildepositoComponent {

  @ViewChild('dt') dt: Table | undefined;

  depositos!: TransfersClient[];
  deposito!: TransfersClient;
  valid!: any[];
  approved!: any[];
  cols!: Column[];

  // private depositoService: TransfersService
  //private depositoservices: DepositosMockService
  constructor(
     private localStorageService: LocalStorageService,
     private depositoService: TransfersService,
     private messageService: MessageService,)
     {

      }

  ngOnInit() {
    this.getUserApiKey();

  }

  getUserApiKey(){
    // Se obtiene el userApiKey del LocalStorage
  const userApiKey = this.localStorageService.getItem('userApiKey');
  if (userApiKey) {
    this.getDataTable(userApiKey);
  } else {
    console.error('userApiKey no encontrado en el LocalStorage');
  }
  }

  getDataTable(userApiKey: string) {
    this.depositoService.getTransactions(userApiKey).subscribe({
      next: data => {
        this.depositos = data;
      },
      error: e => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error consultando el historico de depositos',
          detail: 'Comuniquese con soporte',
          life: 2000
        });
      }
    });
  }


  applyFilterGlobal($event, stringVal) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getSeverity(status: string) {
    switch (status) {

      case 'FAILED':
        return 'danger';

      case 'DONE':
        return 'success';

      default:
        return 'default-value';
    }
  }

}
