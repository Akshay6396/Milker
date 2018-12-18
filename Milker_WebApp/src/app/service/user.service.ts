import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        debugger;
        return this.http.post(`${environment.apiUrl}account/Register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
    getProducts(userid: string) {
        return this.http.post(`${environment.apiUrl}/account/GetMilkerOrders/`, userid)
    }
    requestOTP(id: number) {
        debugger;
        return this.http.post(`${environment.apiUrl}account/RequestOTP`, id)
    }
    verifyCode(verificationCode: any, phoneNumner: any) {
        // var payload = new FormData();
        // payload.append('PhoneNumber', phoneNumner)
        // payload.append('VerificationCode', verificationCode);
        var payload = {
            phoneNumner, verificationCode
        }
        return this.http.post(`${environment.apiUrl}account/VerifyCode`, payload)
    }

}