import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    register(user: User) {
        debugger;
        return this.http.post(`${environment.apiUrl}account/Register`, user);
    }
    requestOTP(id: number) {
        return this.http.post(`${environment.apiUrl}account/RequestOTP`, id)
    }
    verifyCode(phoneNumber, verificationCode) {
        debugger;
        return this.http
            .post(
                environment.apiUrl + '/account/VerifyCode',
                {
                    "PhoneNumber": phoneNumber,
                    "VerificationCode": verificationCode
                }
            )
            .map(response => response.json())
            .map((response) => {
                if (response.Status) {
                    localStorage.setItem('frontend-token', response.Data.token);
                } else {
                    localStorage.removeItem('frontend-token');
                }
                return response;
            })
            .catch(this.handleError);
    }
    private handleError(error: Response | any) {
        let errorMessage: any = {};
        // Connection error
        if (error.status == 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: "Sorry, there was a connection error occurred. Please try again."
            };
        }
        else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
}