import { Component, OnInit } from '@angular/core';
import { PurchasesDatabaseService } from '../../services/purchases-database.service';
import { Purchase } from '../../models/purchase';

import { TypeOf } from 'src/app/pipes/sort-by-title.pipe';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})

export class PurchasesComponent implements OnInit {

  TypeOf: TypeOf = TypeOf.ASC;

  purchases: Promise<Purchase[]> = this.getPurchases();

  constructor(private purchasesDb: PurchasesDatabaseService) {
  }

  ngOnInit(): void {
    // this.purchases = this.getPurchases();
  }

  async getPurchases(): Promise<Purchase[]> {
    return this.purchasesDb.getAll();
  }
  toggleSortType(): void{
    if (this.TypeOf ===TypeOf.ASC){
      this.TypeOf = TypeOf.DESC;
    }
    else{
      this.TypeOf = TypeOf.ASC;
    }
  }
  async toggleStatus(purchase: Purchase): Promise<any> {
    await this.purchasesDb.putOneById(purchase.id, Object.assign(purchase, {isPurchased: !purchase.isPurchased}));
  }


}
