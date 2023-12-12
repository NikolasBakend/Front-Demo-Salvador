import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from 'src/app/domain/models/column';
import { TransfersClient } from 'src/app/domain/models/transfers-clients';
import { TransfersService } from 'src/app/services/apiTransfers/transfers.service';

@Component({
  selector: 'app-transactions-sent',
  templateUrl: './transactions-sent.component.html',
  styleUrls: ['./transactions-sent.component.css']
})
export class TransactionsSentComponent {

  @ViewChild('dt') dt: Table | undefined;

  transfersSents!: TransfersClient[];
  transfersSent!: TransfersClient;
  cols!: Column[];

  constructor(
     private enviadasService: TransfersService,
     private messageService: MessageService,)
     {

      }

  ngOnInit() {
    this.getDataTable();

  }

  getDataTable() {
    this.enviadasService.getTransactionsSent().subscribe(
      {
        next: data => {
          this.transfersSents = data
        }, error: e => {
          this.messageService.add({ severity: 'error', summary: 'Error consultando el historico de transferencias enviadas', detail: 'Comuniquese con soporte', life: 2000 });
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
