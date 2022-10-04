import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authResponseData, AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  loginForm: FormGroup;
  isLoading: boolean = false;
  error!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar, private router: Router) {
    this.loginForm = formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password

      let authObservable: Observable<authResponseData>;

      this.isLoading = true;
      if (this.isLoginMode) {
        authObservable = this.authService.login(email, password)
      } else {
        authObservable = this.authService.signUp(email, password)
      }

      authObservable.subscribe({
        next: resData => {
          this.isLoading = false
          this.router.navigate(['/feed'])
        },
        error: error => {
          this.openSnackBar(error.error.error.message)
          this.isLoading = false
        }
      })
    }

    this.loginForm.reset()
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', { duration: 5000 });
  }

}
