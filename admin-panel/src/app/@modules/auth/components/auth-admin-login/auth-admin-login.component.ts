import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../../@shared/services/auth.service';

@Component({
  templateUrl: './auth-admin-login.component.html',
  styleUrls: ['./auth-admin-login.component.scss'],
})
export class AuthAdminLoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm);
    this.authService
      .adminLogin({
        phoneNumber: '01853753854',
        password: '123456',
      })
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
