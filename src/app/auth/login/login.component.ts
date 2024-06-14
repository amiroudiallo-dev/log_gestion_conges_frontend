import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateModel } from '../../models/authenticate.model';
import { AuthService } from '../auth.service';
import { TokenModel } from '../../models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  credentials: AuthenticateModel = new AuthenticateModel();

  constructor(private fb: FormBuilder, private authService: AuthService){}

  ngOnInit(): void {
      this.onCreateForm();
  }

  onCreateForm(): void {
    this.authForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmitForm(): void {
    let credentials: AuthenticateModel = new AuthenticateModel();
    credentials = this.authForm.value as AuthenticateModel;
    console.log(credentials);
    this.authService.authenticatedUser(credentials)
      .subscribe({
        next: (response: TokenModel) => {
          console.log("Response authenticated: " ,response);
          this.authService.saveToken(response.id_token);
        },
        error: (err: any) => {console.log("resp error: ", err);}
    });
  }
}
