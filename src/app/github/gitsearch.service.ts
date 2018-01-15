import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import 'rxjs/add/operator/map';

@Injectable()
export class GitsearchService {

  private username: string;
  private access_token: string = environment.access_token;

  constructor(private http: HttpClient) {
    console.log('Service is ready!');
    this.username = 'jameskimari';
   }
getUserProfile() {
  return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.access_token)
    .map(result => result);
 
}
}
