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
  displaySpinner = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthentificationService,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.status !== undefined) {
        switch (params.status) {
          case 'success':
            this.registerSuccess = true;
            this.logoutSuccess = false;
            break;
          case 'logout':
            this.logoutSuccess = true;
            this.registerSuccess = false;
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
    this.displaySpinner = true;
    this.authenticationService.login(user)
      .then((userData) => {
        console.log('user connected', userData);
        this.displaySpinner = false;
        this.router.navigate(['auth/home']);
      })
      .catch(() => {
        this.badCredentials = 'Username or password incorrect';
        this.displaySpinner = false;
      });
  }

  goToLandingPage(): void {
    this.router.navigate(['']);
  }

}
