import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BrandService } from 'src/app/@shared/services/brand.service';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create-component.html',
})
export class BrandCreateComponent {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  constructor(
    private brandService: BrandService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {}

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
  onSubmitCreate() {
    if (!this.imageUrl) {
      this.notificationService.error('Image Empty', '');
    } else if (!this.brandForm.value.name) {
      this.notificationService.error('Name Empty', '');
    } else {
      this.brandService
        .create({
          ...this.brandForm.value,
          image: this.imageUrl,
        })
        .subscribe((res: any) => {
          this.notificationService.success('Created', '');
          this.onClose.emit();
          this.brandForm.reset();
          this.imageUrl = '';
        });
    }
  }
}
