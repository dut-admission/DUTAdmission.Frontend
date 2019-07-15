import { Component, OnInit } from '@angular/core';
import {DocumentType} from '../../../../_areas/admin-area/_entities/document-type';
import {DocumentTypeService} from '../../../../_areas/admin-area/_services/document-type.service';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';
import {TuitionTypeService} from '../../../../_areas/admin-area/_services/tuition-type.service';
import {SharedService} from '../../../../_core/shared.service';

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.scss']
})
export class DocumentTypeListComponent implements OnInit {

  document_type_list: DocumentType[];
  documentType: DocumentType;

  constructor(private  document_type_service: DocumentTypeService, private sharedService: SharedService) { }

  ngOnInit() {
    this.document_type_service.getAll().subscribe(
      result => {
        this.document_type_list = result;
      },
      error1 => {
        alert('Get document type error !!');
      }
    );
  }

  openModalDetail(content, document_type) {
    if (document_type) {
      this.documentType = new DocumentType(document_type);
    } else {
      this.documentType = new DocumentType(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  Edit_Add(documentType: DocumentType) {
    this.sharedService.emitChange(true);
    if (documentType.Id === 0) {
      this.document_type_service.add(documentType).subscribe(
        result => {
          this.document_type_list.push(result);
          this.sharedService.dismissAll();
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Thêm thành công');
        },
        error1 => {
          this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
          this.sharedService.emitChange(false);
        });
    } else {
      this.document_type_service.edit(documentType).subscribe(
        result => {
          const index = this.document_type_list.findIndex(x => x.Id === result.Id);
          this.document_type_list[index] = result;
          this.sharedService.dismissAll();
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Lưu thay đổi thành công');
        },
        error1 => {
          this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
          this.sharedService.emitChange(false);
        });
    }


  }

  deleteDocumentType(id: number) {
    this.sharedService.emitChange(true);
    this.document_type_service.delete(id).subscribe(
      result => {
        this.document_type_list = this.document_type_list.filter(x => x.Id !== id);
        this.sharedService.dismissAll();
        this.sharedService.emitChange(false);
        this.sharedService.notifySuccess('Xóa thành công');
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      });
  }

  onRequiredChange(documentType: DocumentType) {
    this.sharedService.emitChange(true);
    this.document_type_service.edit(documentType).subscribe(
      result => {
        const index = this.document_type_list.findIndex(x => x.Id === result.Id);
        this.document_type_list[index] = result;
        this.sharedService.dismissAll();
        this.sharedService.emitChange(false);
      },
      error1 => {
        this.sharedService.emitChange(false);
      });
  }

}
