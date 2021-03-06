import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Declare Login Form
  loginForm: FormGroup;
  // Boolean Loading Value
  loading = false;
  // Boolean Submitted Value
  submitted = false;

  errorDuringLogin;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    // Validate loginForm
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formFields() {
    return this.loginForm.controls;
  }

  login() {

    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }

    this.loading = true;

    // Authenticate
    this.accountService.authenticate(this.formFields.username.value, this.formFields.password.value)
                    .subscribe(
                      () => {
                        this.errorDuringLogin = null;
                        this.loading = false;
                        console.log('login successful!');
                        console.log('Navigating to Home...');
                        this.router.navigate(['/home']);
                      },
                      err => {
                        this.errorDuringLogin = err;
                        console.log(err);
                        this.loading = false;
                        this.submitted = false;
                      },
                      () => {
                        console.log('observable complete');
                      }
                    );
  }
}
