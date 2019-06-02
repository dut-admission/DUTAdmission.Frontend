import {Component, OnInit} from '@angular/core';
import {Tuition} from '../../../../_areas/admin-area/_entities/tuition';
import {TuitionService} from '../../../../_areas/admin-area/_services/tuition.service';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';
import {SharedService} from '../../../../_core/shared.service';

@Component({
  selector: 'app-tuition-list',
  templateUrl: './tuition-list.component.html',
  styleUrls: ['./tuition-list.component.scss']
})
export class TuitionListComponent implements OnInit {
  tuitions: Tuition[] = [];
  tuitionTypes: TuitionType[] = [];
  tuition: Tuition = new Tuition(null);
  constructor(private tuitionService: TuitionService,
              private sharedService: SharedService) {
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
    this.sharedService.openFormModal(content, 'lg');
  }

  onOpenReceiptModal(content) {
    this.sharedService.openFormModal(content, 'lg');
  }
}
