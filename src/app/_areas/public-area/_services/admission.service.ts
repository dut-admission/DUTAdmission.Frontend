import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document, DocumentForUpload} from '../_entities/document';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private httpClient: HttpClient) {
  }

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>('http://localhost:62025/api/public/list-document');
  }

  uploadDocument(doc: DocumentForUpload): Observable<any> {
    return this.httpClient.put<any>('http://localhost:62025/api/public/update-file', doc, httpOptions);
  }


}
