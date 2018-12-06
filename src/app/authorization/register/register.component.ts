import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  regdForm :FormGroup;
  storage:any=[]

  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.regdForm = this.formBuilder.group ({
     PhoneNumber:  ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
     Email:['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(50)])],
     Password:  ['', Validators.required],
     Repeatpassword:['',Validators.required]
  });
  debugger;
  }
  get f() { return this.regdForm.controls; }

  onSubmit(){
    let add = this.regdForm.value;
    this.storage.push(add);
    this.regdForm.reset();
    console.log(this.storage[0])
    debugger;
  }
}

