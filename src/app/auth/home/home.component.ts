import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../landing-page/authentification.service';

@Component({
  selector: 'near-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authentificationService: AuthentificationService) { }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['login', 'logout']);
  }
}
