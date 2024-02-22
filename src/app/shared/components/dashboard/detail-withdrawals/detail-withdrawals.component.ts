import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from 'src/app/domain/models/column';
import { TransfersClient } from 'src/app/domain/models/transfers-clients';
import { TransfersService } from 'src/app/services/apiTransfers/transfers.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-detail-withdrawals',
  templateUrl: './detail-withdrawals.component.html',
  styleUrls: ['./detail-withdrawals.component.css']
})
export class DetailWithdrawalsComponent {

  @ViewChild('dt') dt: Table | undefined;

  withdrawals!: TransfersClient[];
  withdrawal!: TransfersClient;
  cols!: Column[];

  constructor(
     private retiroService: TransfersService,
     private localStorageService: LocalStorageService,
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
    this.retiroService.getWithdrawals(userApiKey).subscribe({
      next: data => {
        this.withdrawals = data;
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
