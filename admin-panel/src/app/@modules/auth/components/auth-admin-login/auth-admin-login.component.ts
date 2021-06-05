import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../../@shared/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { routesConstant } from 'src/app/@constant/routes.constant';

@Component({
  templateUrl: './auth-admin-login.component.html',
  styleUrls: ['./auth-admin-login.component.scss'],
})
export class AuthAdminLoginComponent implements OnInit {
  readonly routesConstant = routesConstant;
  isLoading: boolean = false;
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phoneNumber: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
  submitForm(): void {
    this.isLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService.adminLogin(this.validateForm.value).subscribe(
      (res: any) => {
        if (res?.token?.token.length) {
          this.isLoading = false;
          localStorage.setItem('token', String(res.token.token));
          this.notification.success('Authentication Success', '');
          this.router.navigate([routesConstant.adminDashboard]);
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.notification.error(String(error?.error?.message), '');
      }
    );
  }
}
