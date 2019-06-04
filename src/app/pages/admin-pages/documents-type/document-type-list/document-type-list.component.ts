import { Component, OnInit } from '@angular/core';
import {DocumentType} from '../../../../_areas/admin-area/_entities/document-type';
import {DocumentTypeService} from '../../../../_areas/admin-area/_services/document-type.service';

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.scss']
})
export class DocumentTypeListComponent implements OnInit {

  document_type_list: DocumentType[];
  constructor(private  document_type_service : DocumentTypeService) { }

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

}
