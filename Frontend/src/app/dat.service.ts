import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserData} from "./models/userData";

@Injectable({
  providedIn: 'root'
})
export class DatService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `http://localhost:3000/api/crash-log/`;
    return this.http.get(url);
  }

  submitPersonalData(userData : UserData): Observable<any> {
    const url = `http://localhost:3000/api/user`;
    return this.http.post(url, {userData});
  }

  getCarData(b : string , z : number): Observable<any> {
    const url = `http://localhost:3000/api/crash/check/` + b + '/' + z as string;
    return this.http.get(url);
  }
}




