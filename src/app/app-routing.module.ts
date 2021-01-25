import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { EditPurchaseComponent } from './components/edit-purchase/edit-purchase.component';

import {InfoPageComponent} from './components/info-page/info-page.component';
import { PurchasesComponent } from './components/purchases/purchases.component';

  
const routes: Routes = [
  {
    path: '',
    component: InfoPageComponent,
  },
  {
    path: 'purchases',
    pathMatch: 'full',
    component: PurchasesComponent,
  },
  {
    path: 'purchases/edit/:id',
    pathMatch: 'full',
    component: EditPurchaseComponent,
  },
  {
    path: 'purchases/add',
    pathMatch: 'full',
    component: AddPurchaseComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
