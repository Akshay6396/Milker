import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,){ }
    public disabled = false;
    public status: {isopen: boolean} = {isopen: false};
    public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  logout() {
    // remove user from local storage to log user out
    debugger;
    this.authenticationService.logout()
}

  ngOnInit(): void {}
}
