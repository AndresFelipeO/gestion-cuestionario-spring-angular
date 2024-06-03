import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected baseUrl:string="http://localhost:8080/api";
  protected httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected http:HttpClient) { }

}
