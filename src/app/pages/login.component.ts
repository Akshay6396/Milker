import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertService, AuthenticationService } from '../service/index';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            PhoneNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
            password: new FormControl('', Validators.required)
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    onSubmit() {
        debugger;
        localStorage.setItem('token', 'akshay');
        this.router.navigate(['/productlisting']);
        // this.submitted = true;

        // // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //     return;
        // }
        // this.loading = true;
        // this.authenticationService.login(this.f.PhoneNumber.value, this.f.password.value)
        //     .subscribe(
        //         result => {
        //             this.loading = false;
        //             if (result.Status) {
        //                 this.router.navigate(['/orders']);
        //             } else {
        //                 this.alertService.error(result.Message, true);
        //             }

        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         })
    }
}
