export class University {
  id: number;
  university_name: string;
  address: string;
  phone_number: string;
  fax: string;
  email: string;
  summary: string;
  website: string;

  constructor(university: University) {
    if (university) {
      this.id = university.id;
      this.university_name = university.university_name;
      this.address = university.address;
      this.phone_number = university.phone_number;
      this.fax = university.fax;
      this.email = university.email;
      this.summary = university.summary;
      this.website = university.website;
    } else {
      this.id = 0;
      this.university_name = '';
      this.address = '';
      this.phone_number = '';
      this.fax = '';
      this.email = '';
      this.summary = '';
      this.website = '';
    }
  }
}
