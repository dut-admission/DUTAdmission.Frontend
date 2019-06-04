import {Injectable} from '@angular/core';
import {ContactMessage} from '../_entities/contact-message';
import {HttpClient} from '@angular/common/http';
import {httpOptions} from '../../../_constants/http-option';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  constructor(private httpClient: HttpClient) {
  }

  sendMessage(contact: ContactMessage): Observable<any> {
    return this.httpClient.post<any>('http://localhost:62025/api/public/contact-message', contact, httpOptions);
  }
}
