import { Injectable } from '@angular/core';
import { BaseHttp } from './base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchasesDatabaseService extends BaseHttp {

  constructor(public http: HttpClient) {
    super(http, 'purchases');
  }
}
