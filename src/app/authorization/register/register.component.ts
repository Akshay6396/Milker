import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  regdForm :FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.regdForm = this.formBuilder.group ({
     PhoneNumber:  ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
     Email:['', Validators.required,Validators.minLength(10), Validators.maxLength(50)],
     Password:  ['', Validators.required],
     Repeatpassword:['',Validators.required]
  });
  }
  get f() { return this.regdForm.controls; }

  onSubmit(){

  }
}

