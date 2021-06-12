import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CategoryService } from './../../../../@shared/services/category.service';
import { DepartmentService } from 'src/app/@shared/services/department.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
})
export class CategoryUpdateComponent implements OnInit {
  @Input() data: any = {};

  @Output() onUpdated = new EventEmitter<any>();

  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadMore();
    this.imageUrl = this.data.image;
    this.categoryForm.patchValue({
      name: this.data.name,
      department: this.data?.department?.id,
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

  //* Update
  isModalOpen = false;
  imageUploadEndPoint = this.utilsService.uploadImageEndPoint;
  imageUrl: string = this.data?.image;
  imageUploadLoading: boolean = false;
  categoryForm = this.fb.group({
    name: ['', Validators.required],
    department: ['', Validators.required],
    isFeatured: [''],
    isActive: [''],
    isPopular: [''],
    isHot: [''],
    isNew: [''],
  });
  onSubmit() {
    if (!this.categoryForm.value.name) {
      this.notificationService.error('Name are Empty', '');
    } else if (!this.imageUrl) {
      this.notificationService.error('Image are empty', '');
    } else {
      this.categoryService
        .update(this.data.id, {
          image: this.imageUrl,
          ...this.categoryForm.value,
        })
        .subscribe((res: any) => {
          this.notificationService.success('Updated', '');
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
