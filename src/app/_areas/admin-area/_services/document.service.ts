import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document, StudentDoc} from '../_entities/document';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  constructor(private httpClient: HttpClient) {
  }

  getStudentDocuments(condition): Observable<any> {
    return this.httpClient.post<any>(API_URL.DOCUMENT_LIST, condition, httpOptions);
  }

  getStudentDocumentsLocal(): StudentDoc[] {
    console.log('hus hus');
    const studentDocs: StudentDoc[] = [];
    const documents: Document[] = [];
    for (let index = 0; index < 3; index++) {
      documents.push(
        {
          Description: 'Something',
          DocumentTypeId: 1,
          DocumentTypeName: 'Giấy báo nhập học',
          FileName: '',
          Id: index,
          ResponseMessage: '',
          StatusId: 1,
          StatusName: 'Đang thử nghiệm',
          Url: 'http://localhost:62025/Document/20190603163756_4_student_info_store.pdf',
          IsRequired: index % 2 === 0
        }
      );
    }

    for (let index = 1; index < 30; index++) {
      studentDocs.push(
        {
          ClassName: `14T${index}`,
          FirstName: 'An',
          Id: index,
          IdentityNumber: '2015796190',
          LastName: 'Trinh',
          ClassId: index % 3,
          DocumentInfoes: documents
        }
      );
    }
    return studentDocs;
  }
}
