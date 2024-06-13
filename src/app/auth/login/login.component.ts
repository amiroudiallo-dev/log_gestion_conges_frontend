import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateModel } from '../../models/authenticate.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  credentials: AuthenticateModel = new AuthenticateModel();

  constructor(private fb: FormBuilder){}

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
    console.log(this.authForm.value);
  }
}
