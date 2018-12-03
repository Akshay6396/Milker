import { Component } from '@angular/core';
import { FormGroup, Validators ,FormControl } from '@angular/forms';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  regdForm :FormGroup;

  constructor() { }
  ngOnInit() {
    this.regdForm = new FormGroup({
     PhoneNumber: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
     password:new FormControl ('', Validators.required)
  });
  }

}

