import {Component, OnInit} from '@angular/core';
import {Document, StudentDoc} from '../../../../_areas/admin-area/_entities/document';
import {DocumentService} from '../../../../_areas/admin-area/_services/document.service';
import {SharedService} from '../../../../_core/shared.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  studentDocs: StudentDoc[] = [];
  newDocument: Document;

  constructor(private documentService: DocumentService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.studentDocs = this.documentService.getStudentDocuments();
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
}
