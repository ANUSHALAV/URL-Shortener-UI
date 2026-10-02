import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {

  constructor(private httpClient : HttpClient){}

  CreateShortUrl(url:string){
    let header = {
      'content-type': 'application/json',
    };

    let params = {
      url: url
    }

    this.httpClient.post(environment.baseurl+"api/UrlShortener/CreateShortUrl", {headers: header, params: params });
  }
  
}
