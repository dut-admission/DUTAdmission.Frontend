import { Component, OnInit } from '@angular/core';
import {AdmissionService} from '../../../_areas/public-area/_services/admission.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {Tuition} from '../../../_areas/public-area/_entities/tuition';
import {SharedService} from '../../../_core/shared.service';

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.scss']
})
export class TuitionComponent implements OnInit {
  tuition: Tuition;
  constructor(private admissionService: AdmissionService,
              private sharedService: SharedService,
              ) {
    this.tuition = new Tuition();
  }

  ngOnInit() {
    this.sharedService.emitChange(true);
    this.admissionService.getTuitions().subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.tuition = value;
      },
      error => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError(error);
      }
    );
  }

  getTransferSyntax(content) {
    this.sharedService.openFormModal(content, 'sm');
  }
}
