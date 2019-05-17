import {Component, OnInit} from '@angular/core';
import {AdmissionService} from '../../../../_areas/public-area/_services/admission.service';
import {Document} from '../../../../_areas/public-area/_entities/document';

@Component({
  selector: 'app-admission-docs',
  templateUrl: './admission-docs.component.html',
  styleUrls: ['./admission-docs.component.scss']
})
export class AdmissionDocsComponent implements OnInit {
  documents: Document[];
  constructor(private admissionService: AdmissionService) {
    this.documents = [];
  }

  ngOnInit() {
  }

  onLoadDocument() {
    this.admissionService.getDocuments().subscribe(
      value => {
        this.documents = value;
      },
      error => console.log(error)
    );
  }
}
