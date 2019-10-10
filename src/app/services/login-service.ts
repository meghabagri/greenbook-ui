import { HttpClient } from '@angular/common/http';
import { LoginPayload } from '../models/login-payload';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class LoginService { 
    constructor(private client: HttpClient) {

    }

    private loginUrl: string = `/post`;

    login(payload: LoginPayload) {
        console.info(payload);
        return this.client.post(this.loginUrl, payload);
    }
  }

