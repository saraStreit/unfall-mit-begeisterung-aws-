import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatService {
  private baseUrl = 'http://localhost:3000'; // Adjust the URL to your server's endpoint

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `${this.baseUrl}/your-api-endpoint`; // Replace 'your-api-endpoint' with the actual endpoint you want to fetch data from
    return this.http.get(url);
  }
}
