import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document, StudentDoc} from '../_entities/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  constructor(private httpClient: HttpClient) {
  }

  getStudentDocuments(): StudentDoc[] {
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
          Url: 'http://localhost:62025/Document/20190518225528_3_student_info_store.pdf',
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
          Documents: documents
        }
      );
    }
    return studentDocs;
  }
}
