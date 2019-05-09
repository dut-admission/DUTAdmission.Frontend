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
  SubjectName: string;
  Score: number;
}

export class UniversityInfo {
  ClassName: string;
  DepartmentName: string;
  FacultyName: string;
  ProgramName: string;
  EnrollmentAreaId: number;
  ElectionId: number;
  UniversityExamResults: UniversityExamResult[];
}

export class HighSchoolResult {
  HightSchoolYearId: number;
  ConductTypeId: number;
  LearningAbilityId: number;
  GPAScore: number;
}

export class Achievement {
  AchievementTypeId: number;
  AchievementLevelId: number;
  AchievementPrizeId: number;
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
  RelationId: number;
  YearOfBirth: number;
  CareerTypeId: number;
  EthnicId: number;
  ReligionId: number;
  NationalityId: number;
  PhoneNumber: string;
  Email: string;
  Address: string;
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
}
export class YouthGroupInfo {
  DateOfJoiningYouthGroup: Date;
  PlaceOfJoinYouthGroup: string;
  HavingBooksOfYouthGroup: boolean;
  HavingCardsOfYouthGroup: boolean;
}
