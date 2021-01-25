import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/models/purchase';
import { PurchasesDatabaseService } from 'src/app/services/purchases-database.service';

@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.css']
})
export class EditPurchaseComponent implements OnInit {
    purchase!: Purchase;
    
    form: FormGroup = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)])
  });
    constructor(
      private purchasesDb: PurchasesDatabaseService,
      private activatedroute: ActivatedRoute,
      private router: Router,
      ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      async data =>{
       this.purchase=  await this.purchasesDb.getOneById(data.id);
        this.form.setValue(
          {
            title: this.purchase.title,
            quantity: this.purchase.quantity
          });
      });
    }
      async onDelete(): Promise<any> {
        await this.purchasesDb.deleteOneById(this.purchase.id)
          .then(() => this.router.navigateByUrl('/purchases'));
      }
      async onSubmit(): Promise<void>{
        const data = Object.assign(this.form.value, {isPurchased: false});
        await this.purchasesDb.postOne(data)
        .then(() => this.router.navigateByUrl('/purchases'));
      }
    
  }


