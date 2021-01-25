import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { PurchasesDatabaseService } from '../../services/purchases-database.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})

export class AddPurchaseComponent  {
 
  form: 
  FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    quantity: new FormControl(null, [Validators.required, Validators.min(1)])
  });
  constructor(
    private purchasesDb: PurchasesDatabaseService,
    private router: Router)
    {
      
    }

    async onSubmit(): Promise<void>{
      const data = Object.assign(this.form.value, {isPurchased: false});
      await this.purchasesDb.postOne(data)
      .then(() => this.router.navigateByUrl('/purchases'));
    }
    }




