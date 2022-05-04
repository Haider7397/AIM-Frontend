import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { }

  public GetApis(url: any) {
    return this._http.get(url);
  }

  public PostApis(url: any, data: any) {
    return this._http.post(url, data);
  }

  public uploadFile(url: any,data:any): Observable<HttpEvent<any>> {

    var myFormData = new FormData();
    myFormData.append('quote', data.quote);
    myFormData.append('name', data.name);
    myFormData.append('size', data.size);
    myFormData.append('customerId', data.customerId);
    myFormData.append('type', data.type);
    myFormData.append('date', data.date);

    const request = new HttpRequest('POST', url, myFormData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(request);
  }

  download(url: string): Observable<Blob> {
    return this._http.get(url, {
      responseType: 'blob'
    })
  }

  getToken() {
    return localStorage.getItem("token")
  }

  isLoggedIn() {
    if (this.getToken() !== null) {
      if (this.getToken().length === 0) {
        return false
      }
      else {
        return this.getToken() !== null
      }
    }
    else {
      return this.getToken() !== null
    }

  }
}
