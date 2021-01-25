import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { EditPurchaseComponent } from './components/edit-purchase/edit-purchase.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortByTitlePipe } from './pipes/sort-by-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPageComponent,
    PurchasesComponent,
    AddPurchaseComponent,
    EditPurchaseComponent,
    SortByTitlePipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
