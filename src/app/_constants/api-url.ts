export const ROOT_URL = 'http://localhost:62025/api';

export const enum API_URL {
  STUDENT_PROFILE = 'http://localhost:62025/api/public/student-profile',
  LOGIN = 'http://localhost:62025/api/login',
  FORGET_PASSWORD = 'http://localhost:62025/api/forget-password',
  PROFILE_LIBRARY = 'http://localhost:62025/api/public/profile-library',
  PROFILE_SAVE_MEMBER = 'http://localhost:62025/api/public/update-profile/family-member',
  PROFILE_SAVE_RESULT = 'http://localhost:62025/api/public/update-profile/high-school-result',
  PROFILE_SAVE_ACHIEVEMENT = 'http://localhost:62025/api/public/update-profile/achievement',
  PROFILE_SAVE_PROFILE = 'http://localhost:62025/api/public/update-profile',
  PROFILE_CHANGE_PASSWORD = 'http://localhost:62025/api/public/student-profile/password',
  PROFILE_DELETE_OBJECT = 'http://localhost:62025/api/public/update-profile/deletion',

  DOCUMENT_TYPE_LIST = 'http://localhost:62025/api/admin/document-type',
  DOCUMENT_TYPE_ADD = 'http://localhost:62025/api/admin/add-document-type',
  DOCUMENT_TYPE_EDIT = 'http://localhost:62025/api/admin/document-type/',
  DOCUMENT_TYPE_DELETE = 'http://localhost:62025/api/admin/document-type/delete/',

  TUITION_TYPE_LIST = 'http://localhost:62025/api/admin/tuition-type',
  TUITION_TYPE_ADD = 'http://localhost:62025/api/admin/add-tuition-type',
  TUITION_TYPE_EDIT = 'http://localhost:62025/api/admin/tuition-type/',
  TUITION_TYPE_DELETE = 'http://localhost:62025/api/admin/tuition-type/delete/',

  EDUCATION_PROGRAM = 'http://localhost:62025/api/admin/tuition/libraries',
  STUDENT_MANEGEMENT_LIST = 'http://localhost:62025/api/admin/student',
  STUDENT_MANEGEMENT_UPDATE = 'http://localhost:62025/api/admin/update-student',
  STUDENT_MANEGEMENT_DELETE = 'http://localhost:62025/api/admin/delete-student',

  ACCOUNT_GROUP_MANEGEMENT_LIST = 'http://localhost:62025/api/admin/account-group',
  ACCOUNT_GROUP_MANEGEMENT_ADD = 'http://localhost:62025/api/admin/group-account/add',
  ACCOUNT_GROUP_MANEGEMENT_EDIT = 'http://localhost:62025/api/admin/account-group',
  ACCOUNT_GROUP_MANEGEMENT_DELETE = 'http://localhost:62025/api/admin/account-group/delete/',

  CONTACT_MANEGEMENT_LIST = 'http://localhost:62025/api/admin/contact-messager',
  STATUS_CONTACT_MANEGEMENT_LIST = 'http://localhost:62025/api/admin/contact/status-list',

  CONTACT_MANEGEMENT_SEND = 'http://localhost:62025/api/admin/contact-messager/',
  SETTING_SYSTEM = 'http://localhost:62025/api/public/university-info',

  EMPLOYEE_PROFILE = 'http://localhost:62025/api/admin/employee-profile',
  EMPLOYEE_UPDATE_PROFILE = 'http://localhost:62025/api/admin/employee-profile/update',

  DOCUMENT_LIST = 'http://localhost:62025/api/admin/document',


}
