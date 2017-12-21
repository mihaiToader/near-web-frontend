import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages } from '../../shared/customMatcher';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'near-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  userRegisterForm: FormGroup;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  errors = errorMessages;
  badUsernameOrEmail = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authetificationService: AuthentificationService) {
    this.createForm();
  }

  createForm() {
    this.userRegisterForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
      ]],
      passwordGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.minLength(8),
        ]],
        confirmPassword: ['', [Validators.required]],
      }, {validator: CustomValidators.childrenEqual}),
    });
  }

  goToLandingPage() {
    this.router.navigate(['']);
  }

  register(): void {
    // API call to register your provider
    const user: any = {};
    user.password = this.userRegisterForm.get('passwordGroup').get('password').value;
    user.confirmPassword = this.userRegisterForm.get('passwordGroup').get('confirmPassword').value;
    user.username = this.userRegisterForm.get('userName').value;
    user.email = this.userRegisterForm.get('email').value;
    this.authetificationService.register(user)
      .then(() => this.router.navigate(['/login', 'success']))
      .catch(() => {
        this.badUsernameOrEmail = 'Username or Email are already used';
      });
  }
}
