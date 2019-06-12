import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../_core/shared.service';
import {ContactService} from '../../../../_areas/admin-area/_services/contact.service';
import {Contact} from '../../../../_areas/admin-area/_entities/contact';
import {Status} from '../../../../_areas/admin-area/_entities/status';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  newContact: Contact;
  status: Status[] = [{Id: 0, Name: 'All'}];

  constructor(private contactService: ContactService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.contactService.getAllContact().subscribe(

      result => {
        this.contacts = result;
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );

    this.contactService.getStatusContact().subscribe(
      result => {
        this.status = result;
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );

  }

}
