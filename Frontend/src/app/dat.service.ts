import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `http://localhost:3000/api/crash-log/`; 
    console.log(url);
    return this.http.get(url);
  }
}
