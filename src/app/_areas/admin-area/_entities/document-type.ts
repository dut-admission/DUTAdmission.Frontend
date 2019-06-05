export class DocumentType {
  Id: number;
  Name: string;
  Description: string;
  IsRequired: boolean;

  constructor(documentType: DocumentType) {
    if (documentType) {
      this.Id = documentType.Id;
      this.IsRequired = documentType.IsRequired;
      this.Name = documentType.Name;
      this.Description = documentType.Description;
    } else {
      this.Id = 0;
      this.IsRequired = true;
      this.Name = '';
      this.Description = '';
    }
  }
}
