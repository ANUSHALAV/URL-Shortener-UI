import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {

  constructor(private httpClient: HttpClient) { }

  CreateShortUrl(url: string): any {
    let header = {
      'content-type': 'application/json',
    };

    let body = {
      OriginalUrl: url
    }

    return this.httpClient.post(environment.baseurl + "api/UrlShortener/CreateShortUrl", body, { headers: header });
  }

}
