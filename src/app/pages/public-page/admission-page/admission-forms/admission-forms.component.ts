import {Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-admission-forms',
  templateUrl: './admission-forms.component.html',
  styleUrls: ['./admission-forms.component.scss']
})
export class AdmissionFormsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  downloadPDF(content) {
    const doc = new jsPDF();
    doc.addHTML(document.getElementById('admisionForm'), function () {
      doc.save('obrz.pdf');
    });
  }
}
