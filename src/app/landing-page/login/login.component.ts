import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../../shared/customMatcher';
import { AuthentificationService } from '../authentification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'near-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  userLoginForm: FormGroup;

  errors = errorMessages;
  badCredentials = '';
  registerSuccess = false;
  logoutSuccess = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthentificationService,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
    this.route.params.subscribe(params => {
      if (params.status !== undefined) {
        switch (params.status) {
          case 'success':
            this.registerSuccess = true;
            break;
          case 'logout':
            this.logoutSuccess = true;
            break;
          default:
            console.log(params.status);
        }
      }
    });
  }

  createForm() {
    this.userLoginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    // API call to login your provider
    const user: any = {};
    user.password = this.userLoginForm.get('password').value;
    user.username = this.userLoginForm.get('userName').value;
    this.authenticationService.login(user)
      .then((userData) => {
        console.log('user connected', userData);
        this.router.navigate(['auth/home']);
      })
      .catch(() => {
        this.badCredentials = 'Username or password incorrect';
      });
  }

  goToLandingPage(): void {
    this.router.navigate(['']);
  }

}
