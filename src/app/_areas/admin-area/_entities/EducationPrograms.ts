export class EducationPrograms {
  Id: number;
  Name: string;
  Departments: Departments[];
}

export class Departments {
  Id: number;
  Name: string;
  Classes: Classes[];
}

export class Classes {
  Id: number;
  Name: string;
}
