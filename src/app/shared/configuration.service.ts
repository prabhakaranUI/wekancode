import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  apiHost: string = environment.apiHost;
  webHost: string = environment.webHost;
  webhost: string;
  apihost: string;
  constructor() {
    this.webhost = this.webHost;
    this.apihost = this.apiHost;
  }

  getHost() {
    return this.apiHost;
  }
  getwebHost() {
    return this.webHost;
  }
}
