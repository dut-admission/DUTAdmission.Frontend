import {Component, OnInit} from '@angular/core';
import {Tuition} from '../../../../_areas/admin-area/_entities/tuition';
import {TuitionService} from '../../../../_areas/admin-area/_services/tuition.service';
import {Document} from '../../../../_areas/admin-area/_entities/document';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';

@Component({
  selector: 'app-tuition-list',
  templateUrl: './tuition-list.component.html',
  styleUrls: ['./tuition-list.component.scss']
})
export class TuitionListComponent implements OnInit {
  tuitions: Tuition[] = [];
  tuitionTypes: TuitionType[] = [];
  tuition: Tuition = new Tuition(null);
  closeResult = '';
  constructor(private tuitionService: TuitionService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.tuitions = this.tuitionService.getTuitions();
    this.tuitionTypes = this.tuitionService.getTuitionTypes();
  }
  onOpenDetailModal(content, tuition) {
    if (tuition) {
      this.tuition = new Tuition(tuition);
    } else {
      this.tuition = new Tuition(null);
    }
    console.log(this.tuition);
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

  onOpenReceiptModal(content) {
    this.modalService.dismissAll();
    this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
