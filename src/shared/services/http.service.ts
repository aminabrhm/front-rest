import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAuthFromLocalStorage(): any {
    const token = localStorage.getItem("token") || null;
    return `Bearer ${token}`;
  }

  // Usage >> Get All Data - Or One Data
  // Param >> url > url of api that concatenate with data
  Get<T>(url: string): Observable<T> { return this.http.get<T>(url); }

  // Usage > Insert Data
  // Param >> url > of api && itemName >> data will add it
  Post<T>(url: string, itemName: any): Observable<T> {
    return this.http.post<T>(url, itemName);
  }

  // Usage > Insert Data
  // Param >> url > of api && itemName >> data will add it
  Put<T>(url: string, itemName: any, urlheader?: any): Observable<T> {
    return this.http.put<T>(url, itemName, { headers: ((urlheader == undefined || urlheader == null) ? (new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage())) : (urlheader)) });
  }

  // Usage >> Update Data
  // Param >> url > of api & itemToUpdate >> new data will used to update 
  update<T>(url: string, itemToUpdate: any): Observable<T> { return this.http.put<T>(url, itemToUpdate, { headers: new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage()) }); }

  // Usage >> Update Data 
  // Param >> url of api
  updatewithoutparm<T>(url: string): Observable<T> { return this.http.put<T>(url, { headers: new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage()) }); }

  // Usage >> Delete item
  // Param >> id >> id of data will delete it
  delete<T>(url: string, id: number): Observable<T> { return this.http.delete<T>(url + id); }

  // Param >> url >> url of api with id of data will delete it
  Delete<T>(url: string): Observable<T> { return this.http.delete<T>(url, { headers: new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage()) }); }

}
