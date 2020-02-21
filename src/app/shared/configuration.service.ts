import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  apiHost: string = environment.apiHost;
  webHost: string = environment.webHost;

  constructor() { }

  getHost() {
    return this.apiHost;
  }
  getwebHost() {
    return this.webHost;
  }
}
