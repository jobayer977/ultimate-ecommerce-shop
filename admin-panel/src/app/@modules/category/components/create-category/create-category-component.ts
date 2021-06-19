import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CategoryService } from './../../../../@shared/services/category.service';
import { DepartmentService } from 'src/app/@shared/services/department.service';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category-component.html',
})
export class CreateCategoryComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  constructor(
    private categoryService: CategoryService,
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.loadMore();
  }

  //*Image update
  imageUploadLoading: boolean = false;
  imageUploadEndPoint = this.utilsService.uploadImageEndPoint;
  imageUrl: string = '';
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

  //*Create
  categoryForm = this.fb.group({
    name: [''],
    department: [''],
    isFeatured: [false],
    isActive: [false],
    isPopular: [false],
    isHot: [false],
    isNew: [false],
  });
  onSubmitCreateCategory() {
    if (!this.imageUrl) {
      this.notificationService.error('Image Empty', '');
    } else if (!this.categoryForm.value.department) {
      this.notificationService.error('Select Department', '');
    } else if (!this.categoryForm.value.name) {
      this.notificationService.error('Name are empty', '');
    } else {
      this.categoryService
        .create({
          ...this.categoryForm.value,
          image: this.imageUrl,
        })
        .subscribe((res: any) => {
          this.onClose.emit();
          this.categoryForm.reset();
          this.imageUrl = '';
        });
    }
  }

  //*Department
  optionList: any[] = [];
  isLoading = false;
  dPage = 1;
  loadMore(): void {
    this.isLoading = true;
    this.departmentService
      .filter({ page: this.dPage, take: 10 })
      .subscribe((res: any) => {
        this.isLoading = false;
        this.optionList = res.data;
        this.dPage++;
      });
  }
}
