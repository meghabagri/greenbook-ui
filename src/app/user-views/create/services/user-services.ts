import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { CreatePayload } from '../models/create-payload';

@Injectable({
    providedIn: 'root',
  })
export class UserServices { 
    constructor(private client: HttpClient) {

    }

    private loginUrl: string = `/post`;

    create(payload: CreatePayload) {
        console.info(payload);
        return this.client.post(this.loginUrl, payload);
    }
  }

