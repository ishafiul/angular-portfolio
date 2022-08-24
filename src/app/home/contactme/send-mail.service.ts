import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {SendMessagePayload} from "../../types/send_mail";
import {async, Observable, tap, throwError} from 'rxjs';

const BASE_URL = environment.apiEndPoint;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  params: {},
};

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(
    private http: HttpClient,
  ) { }

  send(data: SendMessagePayload): Observable<any> {
    return this.http.post(BASE_URL + 'mail', data, HTTP_OPTIONS);
  }
}
