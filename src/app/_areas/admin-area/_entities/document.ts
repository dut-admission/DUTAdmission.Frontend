export class StudentDoc {
  Id: number;
  FirstName: string;
  LastName: string;
  IdentityNumber: string;
  ClassId: number;
  ClassName: string;
  DocumentInfoes: Document[];
}

export class Document {
  Id: number;
  DocumentTypeId: number;
  DocumentTypeName: string;
  Description: string;
  IsRequired: boolean;
  Url: string;
  FileName: string;
  ResponseMessage: string;
  StatusId: number;
  StatusName: string;

  constructor(doc: Document) {
    if (doc) {
      this.Id = doc.Id;
      this.DocumentTypeId = doc.DocumentTypeId;
      this.DocumentTypeName = doc.DocumentTypeName;
      this.Description = doc.Description;
      this.IsRequired = doc.IsRequired;
      this.Url = doc.Url;
      this.FileName = doc.FileName;
      this.ResponseMessage = doc.ResponseMessage;
      this.StatusId = doc.StatusId;
      this.StatusName = doc.StatusName;
    } else {
      this.Id = 0;
      this.DocumentTypeId = 1;
      this.DocumentTypeName = '';
      this.Description = '';
      this.IsRequired = true;
      this.Url = '';
      this.FileName = '';
      this.ResponseMessage = '';
      this.StatusId = 1;
      this.StatusName = '';
    }
  }

}
