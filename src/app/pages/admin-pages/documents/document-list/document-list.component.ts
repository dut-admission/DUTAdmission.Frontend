import {Component, OnInit} from '@angular/core';
import {Document, StudentDoc} from '../../../../_areas/admin-area/_entities/document';
import {DocumentService} from '../../../../_areas/admin-area/_services/document.service';
import {SharedService} from '../../../../_core/shared.service';
import {Classes, Departments, EducationPrograms} from '../../../../_areas/admin-area/_entities/EducationPrograms';
import {Status} from '../../../../_areas/admin-area/_entities/status';
import {DocumentType} from '../../../../_areas/admin-area/_entities/document-type';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  studentDocs: StudentDoc[] = [];
  newDocument: Document;
  educationProgramList: EducationPrograms[];
  departmentList: Departments[];
  classList: Classes[];
  statuses: Status[];
  documentTypes: DocumentType[];
  condition = {
    Keyword: '',
    ClassId: 0,
    ProgramId: 0,
    DepartmentId: 0,
    DocumentTypeId: 0,
    StatusId: 0,
    CurrentPage: 1,
    PageSize: 15
  };
  totalPage = 0;

  constructor(private documentService: DocumentService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.getEducationProgram().subscribe(
      result => {
        this.educationProgramList = result.EducationPrograms;
        this.departmentList = this.educationProgramList[0].Departments;
        this.classList = this.departmentList[0].Classes;
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );

    this.sharedService.emitChange(true);
    this.documentService.getStudentDocuments(this.condition).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.studentDocs = value['ListOfDocuments'];
        this.totalPage = value['Paging']['TotalPages'];
        this.statuses = value['ListOfStatus'];
        this.documentTypes = value['ListOfDocumentTypes'];
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      }
    );
  }

  getDocuments() {
    this.sharedService.emitChange(true);
    this.documentService.getStudentDocuments(this.condition).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.studentDocs = value['ListOfDocuments'];
        this.totalPage = value['Paging']['TotalPages'];
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      }
    );
  }

  onOpenPreviewModal(content, document) {
    if (document) {
      this.newDocument = new Document(document);
    } else {
      this.newDocument = new Document(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  onOpenResponseModal(content, document) {
    if (document) {
      this.newDocument = new Document(document);
    } else {
      this.newDocument = new Document(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  ChangeProgram(event: any) {
    const index = this.educationProgramList.findIndex(x => x.Id == event.target.value);
    this.departmentList = this.educationProgramList[index].Departments;
    this.classList = this.departmentList[0].Classes;
  }

  ChangeDepartment(event: any) {
    const index = this.departmentList.findIndex(x => x.Id == event.target.value);
    this.classList = this.departmentList[index].Classes;
  }

  arrayOne(): any[] {
    return Array(this.totalPage);
  }

  changePage(page: number) {
    this.condition.CurrentPage = page;
    this.getDocuments();
  }

  previousPage() {
    this.condition.CurrentPage--;
    this.getDocuments();
  }

  nextPage() {
    this.condition.CurrentPage++;
    this.getDocuments();
  }
}
