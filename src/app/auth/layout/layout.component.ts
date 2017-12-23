import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../landing-page/authentification.service';

@Component({
  selector: 'near-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  constructor(private router: Router,
              private authenticationService: AuthentificationService) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login', 'logout']);
  }

}
