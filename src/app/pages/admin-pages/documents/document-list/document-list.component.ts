import {Component, OnInit} from '@angular/core';
import {Document} from '../../../../_areas/admin-area/_entities/document';
import {DocumentService} from '../../../../_areas/admin-area/_services/document.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  newDocument: Document;
  closeResult = '';

  constructor(private documentService: DocumentService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onOpenPreviewModal(content, document) {
    if (document) {
      this.newDocument = new Document(document);
    } else {
      this.newDocument = new Document(null);
    }
    console.log(this.newDocument);
    this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onOpenResponseModal(content, document) {
    if (document) {
      this.newDocument = new Document(document);
    } else {
      this.newDocument = new Document(null);
    }
    console.log(this.newDocument);
    this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
