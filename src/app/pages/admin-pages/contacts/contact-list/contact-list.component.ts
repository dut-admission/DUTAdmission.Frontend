import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../_core/shared.service';
import {ContactService} from '../../../../_areas/admin-area/_services/contact.service';
import {Contact, ReplyContactMessage} from '../../../../_areas/admin-area/_entities/contact';
import {Status} from '../../../../_areas/admin-area/_entities/status';
import {BasicStudent} from '../../../../_areas/admin-area/_entities/basic-student';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  msgSendMail: ReplyContactMessage;
  id: number;
  newContact: Contact;
  status: Status[] = [{Id: 0, Name: 'All'}];

  constructor(private contactService: ContactService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.id = 0;
    this.msgSendMail = new ReplyContactMessage(null);
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

  openModalDetail(content, Id: number) {
    this.id = Id;
    this.sharedService.openFormModal(content, 'lg');
  }

  Send(msg: ReplyContactMessage) {
    this.sharedService.emitChange(true);
    const Id = this.id;
    this.contactService.send(msg, Id ).subscribe(

      result => {
        const index = this.contacts.findIndex(x => x.Id === Id);
        this.contacts[index].StatusId = 3;
        this.sharedService.notifySuccess('Gửi mail thành công');
        this.sharedService.emitChange(false);
      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
        this.sharedService.emitChange(false);
      });
  }

}
