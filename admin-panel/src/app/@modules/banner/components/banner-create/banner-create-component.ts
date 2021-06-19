import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BannerService } from 'src/app/@shared/services/banner.service';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create-component.html',
})
export class BannerCreateComponent {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  constructor(
    private bannerService: BannerService,
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
  bannerForm = this.fb.group({
    title: [''],
    url: [''],
    type: [''],
    isFeatured: [false],
    isActive: [false],
    isPopular: [false],
    isHot: [false],
    isNew: [false],
  });
  onSubmitCreate() {
    if (!this.imageUrl) {
      this.notificationService.error('Image Empty', '');
    } else if (!this.bannerForm.value.title) {
      this.notificationService.error('Title Empty', '');
    } else if (!this.bannerForm.value.url) {
      this.notificationService.error('URL are empty', '');
    } else {
      this.bannerService
        .create({
          ...this.bannerForm.value,
          image: this.imageUrl,
        })
        .subscribe((res: any) => {
          this.notificationService.success('Created', '');
          this.onClose.emit();
          this.bannerForm.reset();
          this.imageUrl = '';
        });
    }
  }
}
