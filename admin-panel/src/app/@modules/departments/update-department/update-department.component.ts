import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DepartmentService } from 'src/app/@shared/services/department.service';
import { IFBaseResponse } from 'src/app/@shared/interfaces/base.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
})
export class UpdateDepartment implements OnInit {
  @Input() data: any = {};

  @Output() onUpdated = new EventEmitter<any>();

  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService
  ) {}

  //* Update Department
  isModalOpen = false;
  imageUploadEndPoint = this.utilsService.uploadImageEndPoint;
  imageUrl: string = this.data?.image;
  imageUploadLoading: boolean = false;
  departmentForm = this.fb.group({
    name: ['', Validators.required],
    isFeatured: [''],
    isActive: [''],
    isPopular: [''],
    isHot: [''],
    isNew: [''],
  });
  ngOnInit(): void {
    this.imageUrl = this.data.image;
    this.departmentForm.patchValue({
      name: this.data.name,
      isFeatured: this.data.isFeatured,
      isActive: this.data.isActive,
      isPopular: this.data.isPopular,
      isHot: this.data.isHot,
      isNew: this.data.isNew,
    });
  }
  onChangeImageUpload(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.imageUploadLoading = true;
        break;
      case 'done':
        this.imageUploadLoading = false;
        this.imageUrl = info?.file?.response?.data?.link;
        break;
      case 'error':
        this.imageUploadLoading = false;

        break;
    }
  }

  onSubmit() {
    if (!this.imageUrl) {
      this.notificationService.error('Image is Required', '');
    } else {
      this.departmentService
        .update(this.data.id, {
          image: this.imageUrl,
          ...this.departmentForm.value,
        })
        .subscribe(
          (res: IFBaseResponse) => {
            this.notificationService.success('Updated', '');
            this.isModalOpen = false;
            this.onUpdated.emit(res.data);
          },
          (err: any) => {
            this.notificationService.error(err.error.message, '');
          }
        );
    }
  }
}
