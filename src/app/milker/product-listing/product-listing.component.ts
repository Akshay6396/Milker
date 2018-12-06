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
  @ViewChild('confirmModal') confirmModal: ModalDirective;

  currentItem: any;
  isEdit: boolean = false;
  productForm: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  pagesIndex: Array<number>;
  pageStart: number = 1;
  pages: number = 4;
  email = "";

  Element: any = [
    { id: 1, firstName: 'John', lastName: 'Akshay', email: 'john@gmail.com' },
    { id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 6, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 7, firstName: 'Mike', lastName: 'Hussey', email: 'mike123@gmail.com' },
    { id: 8, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 9, firstName: 'Martin', lastName: 'Kos', email: 'martin1@gmail.com' },
    { id: 10, firstName: 'Tom', lastName: 'Paisa', email: 'tom2@gmail.com' },
    { id: 11, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 12, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 13, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 14, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 15, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 16, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 17, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 18, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 19, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 20, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 21, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 22, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 23, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 24, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 25, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 31, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 32, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 33, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 34, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 35, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { id: 41, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { id: 42, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { id: 43, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { id: 44, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { id: 45, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' }
  ];

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'id': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required)

    })
  }

  hideModal(): void {
    this.addItemModal.hide();
    this.confirmModal.hide()
  }

  removeItem(id: number) {
    debugger;
    this.confirmModal.show();
    var data = this.Element.filter(x => x.id === id);
    data = data[0];
    this.currentItem = data;

  }
  confirmDelete(id: number) {
    debugger;
    if (this.Element.length !== -1) {
      const index = this.Element.findIndex(x => x.id === id);
      this.Element.splice(index, 1);
    }
    this.confirmModal.hide();
  }
  addItem(
    id: number): void {
    if (id == 0) {
      this.isEdit = false;
      this.productForm.controls['firstName'].setValue('');
      this.productForm.controls['lastName'].setValue('');
      this.productForm.controls['email'].setValue('');
      this.addItemModal.show();
    }
    else {
      this.isEdit = true;
      var data = this.Element.filter(x => x.id === id);
      data = data[0];
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

