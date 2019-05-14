export class NationalityList {
  id: number;
  name: string;
}

export class ReligionList {
  id: number;
  name: string;
}

export class EthnicList {
  id: number;
  name: string;
}

export class ProgramList {
  id: number;
  name: string;
  fees: number;
}

export class FacultyList {
  id: number;
  name: string;
}

export class Faculty {
  id: number;
  name: string;
}

export class DepartmentList {
  id: number;
  name: string;
  faculty: Faculty;
}

export class ElectionTypeList {
  id: number;
  name: string;
}

export class EnrollmentAreaList {
  id: number;
  name: string;
  bonusing_point: number;
}

export class CircumstanceTypeList {
  id: number;
  name: string;
}

export class HightSchoolYearList {
  id: number;
  year: number;
}

export class ConductTypeList {
  id: number;
  level: string;
}

export class LearningAbilityList {
  id: number;
  level: string;
  starting_point: number;
  ending_point: number;
}

export class CareerTypeList {
  id: number;
  name: string;
}

export class RelationTypeList {
  id: number;
  name: string;
}

export class TalentTypeList {
  id: number;
  name: string;
}

export class AchievementPrizeList {
  id: number;
  name: string;
}

export class AchievementLevelList {
  id: number;
  name: string;
}

export class AchievementTypeList {
  id: number;
  name: string;
}

export class SubjectList {
  id: number;
  name: string;
}

export class PositionTypeList {
  id: number;
  name: string;
}

export class ProfileLibrary {
  nationality_list: NationalityList[];
  religion_list: ReligionList[];
  ethnic_list: EthnicList[];
  program_list: ProgramList[];
  faculty_list: FacultyList[];
  department_list: DepartmentList[];
  election_type_list: ElectionTypeList[];
  enrollment_area_list: EnrollmentAreaList[];
  circumstance_type_list: CircumstanceTypeList[];
  hight_school_year_list: HightSchoolYearList[];
  conduct_type_list: ConductTypeList[];
  learning_ability_list: LearningAbilityList[];
  career_type_list: CareerTypeList[];
  relation_type_list: RelationTypeList[];
  talent_type_list: TalentTypeList[];
  document_type_list: any[];
  insurance_duration_list: any[];
  insurance_type_list: any[];
  achievement_prize_list: AchievementPrizeList[];
  achievement_level_list: AchievementLevelList[];
  achievement_type_list: AchievementTypeList[];
  subject_list: SubjectList[];
  position_type_list: PositionTypeList[];
}
