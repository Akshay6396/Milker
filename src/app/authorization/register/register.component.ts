import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../../helpers/custom-validators'

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  regdForm: FormGroup;
  Element: any = []

  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.regdForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      PhoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      EmailId: ['', Validators.compose([Validators.required, CustomValidators.email])],
      Password: ['', Validators.required],
    });
    debugger;
  }
  get f() { return this.regdForm.controls; }

  onSubmit() {
    let add = this.regdForm.value;
    this.Element.push(add);
    this.regdForm.reset();
    debugger;
    console.log(this.Element[0])
  }
}

