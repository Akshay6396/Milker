import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertService, AuthenticationService } from '../../service/index';

@Component({ templateUrl: 'forgot.component.html' })

export class ForgotComponent implements OnInit {
  forgot: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  show:boolean=false;

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
    debugger;
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.forgot.controls; }

  onSubmit() {
    debugger;
    localStorage.setItem('otp', '123');
    this.show = true;
  }
}
