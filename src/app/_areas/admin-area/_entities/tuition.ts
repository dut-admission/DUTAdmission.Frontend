export class Receipt {
  Id: number;
  CollectorUserId: number;
  CollectorName: string;
  PayerUserId: number;
  PayerName: string;
  Money: number;
  ReceiptNumber: number;
  Name: string;
  Description: string;
  CollectionDate: Date;
}

export class Tuition {
  Id: number;
  FirstName: string;
  LastName: string;
  IdentityNumber: string;
  ClassId: number;
  ClassName: string;
  TuitionFee: number;
  TotalTuition: number;
  IsPaid: boolean;
  Receipt: Receipt;


  constructor(tuition: Tuition) {
    if (tuition) {
      this.Id = tuition.Id;
      this.FirstName = tuition.FirstName;
      this.LastName = tuition.LastName;
      this.IdentityNumber = tuition.IdentityNumber;
      this.ClassId = tuition.ClassId;
      this.ClassName = tuition.ClassName;
      this.TuitionFee = tuition.TuitionFee;
      this.TotalTuition = tuition.TotalTuition;
      this.IsPaid = tuition.IsPaid;
      this.Receipt = tuition.Receipt;

    } else {
      this.Id = 0;
      this.FirstName = '';
      this.LastName = '';
      this.IdentityNumber = '';
      this.ClassId = 1;
      this.ClassName = '';
      this.TuitionFee = 0;
      this.TotalTuition = 0;
      this.IsPaid = false;
      this.Receipt = null;
    }
  }

}
