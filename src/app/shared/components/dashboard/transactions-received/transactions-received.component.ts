import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from 'src/app/domain/models/column';
import { TransfersClient } from 'src/app/domain/models/transfers-clients';
import { TransfersService } from 'src/app/services/apiTransfers/transfers.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-transactions-received',
  templateUrl: './transactions-received.component.html',
  styleUrls: ['./transactions-received.component.css']
})
export class TransactionsReceivedComponent {

  @ViewChild('dt') dt: Table | undefined;

  tranReceiveds!: TransfersClient[];
  tranReceived!: TransfersClient;
  cols!: Column[];

  constructor(
     private recibidasService: TransfersService,
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
        this.recibidasService.getTransactionsReceived(userApiKey).subscribe({
          next: data => {
            this.tranReceiveds = data;
          },
          error: e => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error consultando el historico de transferencias recibidas',
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
