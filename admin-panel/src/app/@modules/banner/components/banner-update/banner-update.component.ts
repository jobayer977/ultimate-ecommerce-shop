import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BannerService } from 'src/app/@shared/services/banner.service';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-banner-update',
  templateUrl: './banner-update.component.html',
})
export class BannerUpdateComponent implements OnInit {
  @Input() data: any = {};

  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService,
    private bannerService: BannerService
  ) {}
  ngOnInit(): void {
    this.imageUrl = this.data.image;
    this.bannerForm.patchValue({
      title: this.data.title,
      url: this.data.url,
      type: this.data.type,
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
        .update(this.data.id, {
          image: this.imageUrl,
          ...this.bannerForm.value,
        })
        .subscribe((res: any) => {
          this.notificationService.success('updated', '');
          this.onClose.emit();
        });
    }
  }
}
