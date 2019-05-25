import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from '../_entities/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  constructor(private httpClient: HttpClient) {
  }

  getDocuments(): Document[] {
    const documents: Document[] = [];
    for (let index = 0; index < 30; index++) {
      documents.push(
        {
          ClassId: 1,
          ClassName: '14T2',
          Description: 'Something',
          DocumentTypeId: 1,
          DocumentTypeName: 'Giấy báo nhập học',
          FileName: '',
          FirstName: 'Trinh',
          Id: index,
          IdentityNumber: '205796190',
          LastName: 'An',
          ResponseMessage: '',
          StatusId: 1,
          StatusName: 'Đang thử nghiệm',
          Url: 'http://localhost:62025/Document/20190518225528_3_student_info_store.pdf',
          IsRequired: index % 2 === 0
        }
      );
    }
    return documents;
  }
}
