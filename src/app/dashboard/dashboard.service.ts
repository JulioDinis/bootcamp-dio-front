import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://my-bootcamp-dio-santander.herokuapp.com/bootcamp'
  constructor(private http: HttpClient) { }


  // findAll
  async getStocks(): Promise<Stock[]> {

    const url = "";

    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();

  }

}
