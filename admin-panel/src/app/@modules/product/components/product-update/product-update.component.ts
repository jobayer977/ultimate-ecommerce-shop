import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BrandService } from 'src/app/@shared/services/brand.service';
import { CategoryService } from 'src/app/@shared/services/category.service';
import { DepartmentService } from 'src/app/@shared/services/department.service';
import { FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ProductService } from './../../../../@shared/services/product.service';
import { UtilsService } from 'src/app/@shared/services/utils.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
})
export class ProductUpdateComponent implements OnInit {
  @Input() data: any = {};
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<any>();
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private notificationService: NzNotificationService,
    private departmentService: DepartmentService,
    private categoryService: CategoryService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.data.productImages;
    this.loadMoreDepartment();
    this.loadMoreCategory();
    this.loadMoreBrands();
    this.productForm.patchValue({
      name: this.data?.name,
      description: this.data?.description,
      specification: this.data?.specification,
      stock: this.data?.stock,
      mrp: this.data?.mrp,
      mrpVat: this.data?.mrpVat,
      brand: this.data?.brand?.id,
      category: this.data?.category?.id,
      department: this.data?.department?.id,
      productCode: this.data?.productCode,
      isAvailable: this.data?.isAvailable,
      isNewArrival: this.data?.isNewArrival,
      isTopSelling: this.data?.isTopSelling,
      isFeatured: this.data?.isFeatured,
      isActive: this.data?.isActive,
      isPopular: this.data?.isPopular,
      isHot: this.data?.isHot,
      isNew: this.data?.isNew,
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
  productForm = this.fb.group({
    name: [''],
    description: [''],
    specification: [''],
    stock: [''],
    mrp: [''],
    mrpVat: [''],
    brand: [''],
    category: [''],
    department: [''],
    productCode: [''],
    isAvailable: [false],
    isNewArrival: [false],
    isTopSelling: [false],
    isFeatured: [false],
    isActive: [false],
    isPopular: [false],
    isHot: [false],
    isNew: [false],
  });
  onSubmitCreate() {
    if (!this.imageUrl) {
      this.notificationService.error('Image Empty', '');
    } else if (!this.productForm.value.name) {
      this.notificationService.error('Name Empty', '');
    } else {
      this.productService
        .update(this.data?.id, {
          ...this.productForm.value,
          productImages: this.imageUrl,
        })
        .subscribe((res: any) => {
          this.notificationService.success('Updated', '');
          this.onClose.emit();
        });
    }
  }

  //*Department
  departmentOptionList: any[] = [];
  isLoading = false;
  dPage = 1;
  loadMoreDepartment(): void {
    this.isLoading = true;
    this.departmentService
      .filter({ page: this.dPage, take: 10 })
      .subscribe((res: any) => {
        this.isLoading = false;
        this.departmentOptionList = res.data;
        this.dPage++;
      });
  }
  //*Category
  categoryOptionList: any[] = [];
  cPage = 1;
  loadMoreCategory(): void {
    this.isLoading = true;
    this.categoryService
      .filter({ page: this.cPage, take: 10 })
      .subscribe((res: any) => {
        this.isLoading = false;
        this.categoryOptionList = res.data;
        this.cPage++;
      });
  }
  //*Brand
  brandOptionList: any[] = [];
  bPage = 1;
  loadMoreBrands(): void {
    this.isLoading = true;
    this.brandService
      .filter({ page: this.bPage, take: 10 })
      .subscribe((res: any) => {
        this.isLoading = false;
        this.brandOptionList = res.data;
        this.bPage++;
      });
  }
}
