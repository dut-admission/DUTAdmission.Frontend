export const ROOT_URL = 'http://localhost:62025/api';

export const enum API_URL {
  STUDENT_PROFILE = 'http://localhost:62025/api/public/student-profile',
  LOGIN = 'http://localhost:62025/api/login',
  FORGET_PASSWORD = 'http://localhost:62025/api/forget-password',
  PROFILE_LIBRARY = 'http://localhost:62025/api/public/profile-library',
  PROFILE_SAVE_MEMBER = 'http://localhost:62025/api/public/update-profile/family-member',
  PROFILE_SAVE_RESULT = 'http://localhost:62025/api/public/update-profile/high-school-result',
  PROFILE_SAVE_ACHIEVEMENT = 'http://localhost:62025/api/public/update-profile/achievement',

  DOCUMENT_TYPE_LIST= 'http://localhost:62025/api/admin/document-type',
  DOCUMENT_TYPE_ADD= 'http://localhost:62025/api/admin/add-document-type',
  DOCUMENT_TYPE_EDIT= 'http://localhost:62025/api/admin/document-type/',
  DOCUMENT_TYPE_DELETE= 'http://localhost:62025/api/admin/document-type/delete/',

  TUITION_TYPE_LIST= 'http://localhost:62025/api/admin/tuition-type',
  TUITION_TYPE_ADD= 'http://localhost:62025/api/admin/add-tuition-type',
  TUITION_TYPE_EDIT= 'http://localhost:62025/api/admin/tuition-type/',
  TUITION_TYPE_DELETE= 'http://localhost:62025/api/admin/tuition-type/delete/',



}
