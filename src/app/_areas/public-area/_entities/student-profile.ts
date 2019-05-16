export class PersonalInfo {
  DateOfIssue: Date;
  PlaceOfIssue: string;
  DateOfBirth: Date;
  PlaceOfBirth: string;
  Sex: boolean;
  PhoneNumber: string;
  Email: string;
  Address: string;
  EthnicId: number;
  ReligionId: number;
  NationalityId: number;
  PermanentResidence: string;
}

export class UniversityExamResult {
  Id: number;
  SubjectName: string;
  Score: number;
}

export class UniversityInfo {
  ClassName: string;
  DepartmentName: string;
  FacultyName: string;
  ProgramName: string;
  EnrollmentAreaName: string;
  ElectionName: string;
  UniversityExamResults: UniversityExamResult[];
}

export class HighSchoolResult {
  Id: number;
  HightSchoolYearId: number;
  HightSchoolYear: number;
  ConductTypeId: number;
  ConductTypeName: string;
  LearningAbilityId: number;
  LearningAbilityName: string;
  GPAScore: number;
}

export class Achievement {
  Id: number;
  AchievementTypeId: number;
  AchievementTypeName: string;
  AchievementLevelId: number;
  AchievementLevelName: string;
  AchievementPrizeId: number;
  AchievementPrizeName: string;
  Description: string;
}

export class HightSchoolInfo {
  HightSchoolName: string;
  YouthGroupInfo: YouthGroupInfo;
  HighSchoolResults: HighSchoolResult[];
  Talents: number[];
  Positions: number[];
  Achievements: Achievement[];
}

export class FamilyMember {
  Id: number;
  Name: string;
  RelationId: number;
  RelationName: string;
  YearOfBirth: number;
  CareerTypeId: number;
  CareerTypeName: string;
  EthnicId: number;
  EthnicName: string;
  ReligionId: number;
  ReligionName: string;
  NationalityId: number;
  NationalityName: string;
  PhoneNumber: string;
  Email: string;
  Address: string;

  constructor() {
    this.Id = 0;
    this.Name = '';
    this.RelationId = 1;
    this.YearOfBirth = 1980;
    this.CareerTypeId = 1;
    this.EthnicId = 1;
    this.ReligionId = 1;
    this.NationalityId = 1;
    this.PhoneNumber = '';
    this.Email = '';
    this.Address = '';
  }
}

export class StudentProfile {
  IdentificationNumber: string;
  IdentityNumber: string;
  LastName: string;
  FirstName: string;
  Avatar: string;
  CircumstanceTypeId: number;
  PersonalInfo: PersonalInfo;
  UniversityInfo: UniversityInfo;
  HightSchoolInfo: HightSchoolInfo;
  FamilyMembers: FamilyMember[];

  constructor() {
    this.Avatar = '../../../../assets/img/theme/team-4-800x800.jpg';
  }
}

export class YouthGroupInfo {
  DateOfJoiningYouthGroup: Date;
  PlaceOfJoinYouthGroup: string;
  HavingBooksOfYouthGroup: boolean;
  HavingCardsOfYouthGroup: boolean;
}
