import { Pipe, PipeTransform } from '@angular/core';
import { Purchase } from '../models/purchase';

export enum TypeOf{
  ASC = 'ASC',
  DESC = 'DESC'
}
@Pipe({
  name: 'sortByTitle'
})
export class SortByTitlePipe implements PipeTransform {

  transform(value: Purchase[], type: TypeOf): Purchase[] {
    const nonPurchased = value.filter(purchase =>!purchase.isPurchased) || [];
    const purchased = value.filter(purchase=>purchase.isPurchased) || [];

    if (type === TypeOf.ASC){
      return [
        ...nonPurchased.sort((a,b)=>(a.title.toLocaleLowerCase()>b.title.toLocaleLowerCase() ? 1 : -1)), 
        ...purchased.sort((a,b)=>(a.title.toLocaleLowerCase()>b.title.toLocaleLowerCase() ? 1 : -1)),
      ];}

    else {
      return [
        ...nonPurchased.sort((a,b)=>(a.title.toLocaleLowerCase()<b.title.toLocaleLowerCase() ? 1 : -1)),
        ...purchased.sort((a,b)=>(a.title.toLocaleLowerCase()<b.title.toLocaleLowerCase() ? 1 : -1)),
      ];
    }
    }
    
  }


