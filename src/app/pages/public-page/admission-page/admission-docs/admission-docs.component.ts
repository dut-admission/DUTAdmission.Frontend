import {Component, OnInit} from '@angular/core';
import {AdmissionService} from '../../../../_areas/public-area/_services/admission.service';
import {Document, DocumentForUpload} from '../../../../_areas/public-area/_entities/document';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admission-docs',
  templateUrl: './admission-docs.component.html',
  styleUrls: ['./admission-docs.component.scss']
})
export class AdmissionDocsComponent implements OnInit {
  file: DocumentForUpload;
  documents: Document[];
  closeResult: string;

  constructor(private admissionService: AdmissionService,
              private modalService: NgbModal,
              private toastr: ToastrService) {
    this.documents = [];
    this.file = new DocumentForUpload();
  }

  ngOnInit() {
    this.onLoadDocument();
  }

  onLoadDocument() {
    this.admissionService.getDocuments().subscribe(
      value => {
        this.documents = value;
      },
      error => console.log(error)
    );
  }

  open(content, type, modalDimension, object) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, {windowClass: 'modal-mini', size: 'sm', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, {windowClass: 'modal-danger', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      if (object) {
        this.file.DocumentId = object.Id;
        this.file.FileName = object.FileName;
        this.file.File = '';
      }
      this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
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

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file.FileName = file.name;
        this.file.File = (reader.result.toString().split(',')[1]);
      };
    }
  }

  onUpload() {
    this.admissionService.uploadDocument(this.file).subscribe(
      value => {
        this.documents.find(doc => doc.Id === this.file.DocumentId).Url = value;
        this.modalService.dismissAll();
        this.toastr.success('Tải file thành công.');
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.file);
  }
}
