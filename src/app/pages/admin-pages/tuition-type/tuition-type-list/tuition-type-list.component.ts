import { Component, OnInit } from '@angular/core';
import {TuitionType} from '../../../../_areas/admin-area/_entities/tuition-type';
import {TuitionTypeService} from '../../../../_areas/admin-area/_services/tuition-type.service';

@Component({
  selector: 'app-tuition-type-list',
  templateUrl: './tuition-type-list.component.html',
  styleUrls: ['./tuition-type-list.component.scss']
})
export class TuitionTypeListComponent implements OnInit {

  tuition_type_list: TuitionType[];

  constructor(private tuition_type_service: TuitionTypeService) {
    this.tuition_type_list = [];
  }

  ngOnInit() {
    this.tuition_type_service.getAll().subscribe(
      result => {
        this.tuition_type_list = result;
      },
        error1 => {
        alert('Get tuition type error !!');
      }
    );
  }

}
