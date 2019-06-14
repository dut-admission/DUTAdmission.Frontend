export class BasicStudent {
  Id: number;
  IdentificationNumber: string;
  FirstName: string;
  LastName: string;
  IdentityNumber: string;
  DateOfBirth: Date;
  Sex: boolean;
  PhoneNumber: string;
  Email: string;
  Address: string;
  ClassId: number;
  ClassName: string;
  DepartmentId: number;
  DepaermentName: string;
  FacultyId: number;
  FacultyName: string;
  ProgramId: number;
  ProgramName: string;

  constructor(student: BasicStudent) {
    if (student) {
      this.Id = student.Id;
      this.IdentificationNumber = student.IdentificationNumber;
      this.FirstName = student.FirstName;
      this.LastName = student.LastName;
      this.IdentityNumber = student.IdentityNumber;
      this.DateOfBirth = student.DateOfBirth;
      this.Sex = student.Sex;
      this.PhoneNumber = student.PhoneNumber;
      this.Email = student.Email;
      this.Address = student.Address;
      this.ClassId = student.ClassId;
      this.ClassName = student.ClassName;
      this.DepartmentId = student.DepartmentId;
      this.DepaermentName = student.DepaermentName;
      this.FacultyId = student.FacultyId;
      this.FacultyName = student.FacultyName;
      this.ProgramId = student.ProgramId;
      this.ProgramName = student.ProgramName;
    } else {
      this.Id = 0;
      this.IdentificationNumber = '';
      this.FirstName = '';
      this.LastName = '';
      this.IdentityNumber = '';
      this.DateOfBirth = new Date();
      this.Sex = true;
      this.PhoneNumber = '';
      this.Email = '';
      this.Address = '';
      this.ClassId = 1;
      this.ClassName = '';
      this.DepartmentId = 1;
      this.DepaermentName = '';
      this.FacultyId = 1;
      this.FacultyName = '';
      this.ProgramId = 1;
      this.ProgramName = '';
    }
  }
}
