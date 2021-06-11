import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private END_POINT = `${environment.API_ENDPOINT}utils/`;
  uploadImageEndPoint = `${this.END_POINT}uploadImage`;
  constructor(private http: HttpClient) {}

  uploadImage(img: any): Observable<any> {
    const formData: any = new FormData();
    formData.append('image', img);
    return this.http.post(`${this.END_POINT}uploadImage`, formData);
  }
}
