import { Injectable } from '@angular/core';
//import * as jwt from 'jsonwebtoken';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

/*  getJwtToken() {
    return jwt.sign({}, environment.privateKey, {
      algorithm: 'ES256',
      expiresIn: '180d',
      issuer: environment.teamId,
      header: {
        alg: 'ES256',
        kid: environment.keyId
      }
    });
  }*/

  generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


}
