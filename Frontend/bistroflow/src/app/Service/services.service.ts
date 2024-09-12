import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOrderCount } from '../Models/userordercount'
import {SalesData} from '../Models/categorysales'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //private baseURL = `${environment.backendBaseUrl}/api/v1/analytics`;
  private baseURL = `http://localhost:8080/api/v1/analytics`;

  constructor(private httpClient: HttpClient) { }

  getUserOrderCount(): Observable<UserOrderCount[]> {
    var res= this.httpClient.get<UserOrderCount[]>(`${this.baseURL}/user-order-count`);
    console.log(res);
    return res;
  }
  
  getSalesData(): Observable<{ date: string, totalSales: number }[]> {
    return this.httpClient.get<{ date: string, totalSales: number }[]>(`${this.baseURL}/datewise-total-sales`);
  }

  getCategorySalesData(): Observable<SalesData[]> {
    return this.httpClient.get<SalesData[]>(`${this.baseURL}/monthwise-category-sold`);
  }
}
