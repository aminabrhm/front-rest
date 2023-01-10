import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //header = new HttpHeaders().set('Authorization', this.authService.getAuthorizationToken());

  constructor(private http: HttpClient) { }

  getAuthFromLocalStorage(): any {
    try {
      // var values = JSON.parse(localStorage.getItem("token"));

      /**
       * 
       */
      // const authData = JSON.parse(localStorage.getItem("token"));
      // if (authData == null) this.logout();
      return '';
    }
    catch (error) { console.error(error); return undefined; }
  }

  // Usage >> Get All Data - Or One Data
  // Param >> url > url of api that concatenate with data
  Get<T>(url: string): Observable<T> { return this.http.get<T>(url, { headers: new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage()) }); }

  // Usage >> Get All Data - Or One Data
  // Param >> url > url of api that concatenate with data and header
  get<T>(url: string, urlheader: any): Observable<T> { return this.http.get<T>(url, { headers: ((urlheader == undefined || urlheader == null) ? (new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage())) : (urlheader)) }); }

  // Usage >> Get All Data - or one data 
  // Param >> url > url of api that concatenate with data 
  // Param >> param - paramter as object {key : value }
  // param >> header - with authentication ids
  GetWithParam<T>(url: string, param?: any, urlheader?: any): Observable<T> {
    return this.http.get<T>(url,
      {
        params: param,
        headers: ((urlheader == undefined || urlheader == null) ? (new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage())) : (urlheader))
      });
  }

  // Usage >> Get All Data - Or One Data 
  // Param >> url > url of api that concatenate with data and header 
  GetWithHeader<T>(url: string, Urlheader?: any): Observable<T> { return this.http.get<T>(url, { headers: ((Urlheader == undefined || Urlheader == null) ? (new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage())) : (Urlheader)) }); }

  // Usage > Insert Data
  // Param >> url > of api && itemName >> data will add it
  Post<T>(url: string, itemName: any, urlheader?: any): Observable<T> {
    return this.http.post<T>(url, itemName, { headers: ((urlheader == undefined || urlheader == null) ? (new HttpHeaders().set('Authorization', this.getAuthFromLocalStorage())) : (urlheader)) });
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
