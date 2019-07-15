export class Contact {
  Id: number;
  FullName: string;
  Email: string;
  Message: string;
  StatusId: number;

  constructor(contact: Contact) {
    if (contact) {
      this.Id = contact.Id;
      this.FullName = contact.FullName;
      this.Message = contact.Message;
      this.Email = contact.Email;
      this.StatusId = contact.StatusId;
    } else {
      this.Id = 0;
      this.FullName = '';
      this.Message = '';
      this.Email = '';
      this.StatusId = 0;
    }
  }
}

export class ReplyContactMessage {
  ResponseMessage: string;
  constructor(msg: string ) {
    if (msg) {
      this.ResponseMessage = msg;
    } else {
      this.ResponseMessage  = '';
    }

  }
}
