import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DepartmentService } from 'src/app/@shared/services/department.service';
import { FormBuilder } from '@angular/forms';
import { IFBaseResponse } from 'src/app/@shared/interfaces/base.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
})
export class CreateDepartment implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onCreateSuccess = new EventEmitter<any>();

  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService
  ) {}
  ngOnInit(): void {}

  //*Create Department
  imageUploadEndPoint = this.utilsService.uploadImageEndPoint;
  imageUrl: string = '';
  imageUploadLoading: boolean = false;
  departmentForm = this.fb.group({
    name: [''],
    isFeatured: [false],
    isActive: [false],
    isPopular: [false],
    isHot: [false],
    isNew: [false],
  });

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

  onSubmitCreateDepartment() {
    if (!this.imageUrl) {
      this.notificationService.error('Image is Required', '');
    } else {
      const normalizePayload = {
        ...this.departmentForm.value,
        image: this.imageUrl,
      };
      this.departmentService
        .create(normalizePayload)
        .subscribe((res: IFBaseResponse) => {
          this.notificationService.success('Created', '');
          this.onCreateSuccess.emit(res.data);
          this.onClose.emit();
          this.departmentForm.reset();
          this.imageUrl = '';
        });
    }
  }
}
