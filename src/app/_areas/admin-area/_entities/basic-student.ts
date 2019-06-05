export class BasicStudent {
  Id: number;
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

export class ConditionStudentManagement {
  NameStudent: string;
  Program: number;
  Nganh: number;
  Lop: number;

  constructor(conditionStudentManagement: ConditionStudentManagement) {
    if (conditionStudentManagement) {
      this.NameStudent = conditionStudentManagement.NameStudent;
      this.Program = conditionStudentManagement.Program;
      this.Nganh = conditionStudentManagement.Nganh;
      this.Lop = conditionStudentManagement.Lop;
    } else {
      this.NameStudent = '';
      this.Program = 0;
      this.Nganh = 0;
      this.Lop = 0;
    }
  }
}
