import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepositosMockService {

  getDepositosMock() {
    return [
      {
        id: '65417dfac5ebea9fed8e66f8',
        asset: 'ETH',
        amount: '0.00061',
        created_at: 1698790906683,
        status: 'FAILED'
      },
      {
        id: '6541807686338e9be3cba266',
        asset: 'ETH',
        amount: '0.00105',
        created_at: 1698791542040,
        status: 'FAILED'
      },
      {
        id: '65418234d55e756f3cf24f79',
        asset: 'ETH',
        amount: '0.00081',
        created_at: 1698791988394,
        status: 'DONE'
      },

    ]
  }

  getDepositos() {
    return Promise.resolve(this.getDepositosMock());
}
}
