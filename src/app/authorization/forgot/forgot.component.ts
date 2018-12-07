import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertService, AuthenticationService } from '../../service/index';

@Component({ templateUrl: 'forgot.component.html' })

export class ForgotComponent implements OnInit {
  forgot: FormGroup;
  OTP: FormGroup;
  reset: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  show: boolean = false;
  confirm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService, ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/productlisting']);
    }

    this.forgot = this.formBuilder.group({
      PhoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });
    this.OTP = this.formBuilder.group({
      Otp: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
    });
    this.reset = this.formBuilder.group({
      Password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.forgot.controls.PhoneNumber; }
  get o() { return this.OTP.controls.Otp; }
  get r() { return this.reset.controls; }

  onSubmit() {
    localStorage.setItem('otp', '123456');
    this.show = true;
  }
  onOtp() {
    const Otp = localStorage.getItem('otp');
    const value = this.o.value;
    if (Otp == value) {
      this.confirm = true
    }
    this.OTP.reset()

  }
  changeNumber() {
    this.confirm = false;
    this.show = false
  }
}
