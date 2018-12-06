import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { elementDef } from '@angular/core/src/view';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';




@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  @ViewChild('addItemModal') addItemModal: ModalDirective;
  @ViewChild('imageModal') imageModal: ModalDirective;

  isEdit: boolean = false;
  productForm: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  pagesIndex : Array<number>;
  pageStart : number = 1;
  pages : number = 4;
  email="";

  Element: any = [
    { id: 1, firstName: 'John', lastName: 'Akshay', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike123@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin1@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom2@gmail.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' }
  ];

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'id': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'image': new FormControl('',Validators.required)

    })
  }

  hideModal(): void {
    this.addItemModal.hide();
  }

  removeItem(index: number) {
    debugger;
    if (this.Element.length !== 1) {
      if (index !== -1) {
        this.Element.splice(index, 1);
      }
    }
  }
  addItem(
    id: number): void {
    if (id == 0) {
      this.isEdit = false;
      this.productForm.controls['id'].setValue('');
      this.productForm.controls['firstName'].setValue('');
      this.productForm.controls['lastName'].setValue('');
      this.productForm.controls['email'].setValue('');
      this.addItemModal.show();
    }
    else {
      this.isEdit = true;
      var data = this.Element.filter(x => x.id === id);
      data = data[0];
      this.productForm.controls['id'].setValue(data.id);
      this.productForm.controls['firstName'].setValue(data.firstName);
      this.productForm.controls['lastName'].setValue(data.lastName);
      this.productForm.controls['email'].setValue(data.email);
      this.addItemModal.show();
    }
  }
  get f() { return this. productForm.controls; }
  onAddSubmit() {
    debugger;
    let add = this.productForm.value;
    this.Element.push(add);
    this.productForm.reset();
  }
  onEditSubmit() {
    debugger;
    let add = this.productForm.value;
    this.Element.push(add);
    this.productForm.reset();

  }
  fileChangeEvent(event: any): void {
  this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }

}

