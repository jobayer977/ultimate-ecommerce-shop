import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BrandService } from 'src/app/@shared/services/brand.service';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
})
export class BrandUpdateComponent implements OnInit {
  @Input() data: any = {};
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService,
    private brandService: BrandService
  ) {}
  ngOnInit(): void {
    this.imageUrl = this.data.image;
    this.brandForm.patchValue({
      name: this.data.name,
      isFeatured: this.data.isFeatured,
      isActive: this.data.isActive,
      isPopular: this.data.isPopular,
      isHot: this.data.isHot,
      isNew: this.data.isNew,
    });
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
  brandForm = this.fb.group({
    name: [''],
    image: [''],
    isFeatured: [false],
    isActive: [false],
    isPopular: [false],
    isHot: [false],
    isNew: [false],
  });
  onSubmit() {
    if (!this.imageUrl) {
      this.notificationService.error('Image Empty', '');
    } else if (!this.brandForm.value.name) {
      this.notificationService.error('Name Empty', '');
    } else {
      this.brandService
        .update(this.data?.id, {
          ...this.brandForm.value,
          image: this.imageUrl,
        })
        .subscribe((res: any) => {
          this.notificationService.success('Updated', '');
          this.onClose.emit();
        });
    }
  }
}
