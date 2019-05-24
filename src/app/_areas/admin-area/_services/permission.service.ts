import {Injectable} from '@angular/core';
import {Screen} from '../_entities/permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() {
  }

  getPermissions(): Screen[] {
    const screens: Screen[] = [];
    screens.push(
      {
        Id: 1,
        Name: 'Quản lý thông tin sinh viên',
        Permissions: [
          {Id: 0, FunctionDescription: '', FunctionName: 'Hiển thị danh sách sinh viên', IsActived: true, IsToViewIndex: true, ScreenId: 1},
          {Id: 0, FunctionDescription: '', FunctionName: 'Chỉnh sửa thông tin sinh viên', IsActived: false, IsToViewIndex: false, ScreenId: 1},
          {Id: 0, FunctionDescription: '', FunctionName: 'Thêm mới thông tin sinh viên', IsActived: false, IsToViewIndex: false, ScreenId: 1},
          {Id: 0, FunctionDescription: '', FunctionName: 'Xóa thông tin sinh viên', IsActived: true, IsToViewIndex: false, ScreenId: 1},
          ]
      },
      {
        Id: 2,
        Name: 'Quản lý giấy tờ của sinh viên',
        Permissions: [
          {Id: 0, FunctionDescription: '', FunctionName: 'Hiển thị danh sách giấy tờ', IsActived: false, IsToViewIndex: true, ScreenId: 2},
          {Id: 0, FunctionDescription: '', FunctionName: 'Phê duyệt giấy tờ', IsActived: true, IsToViewIndex: false, ScreenId: 2},
          {Id: 0, FunctionDescription: '', FunctionName: 'Xem chi tiết giấy tờ', IsActived: false, IsToViewIndex: false, ScreenId: 2}
          ]
      },
      {
        Id: 3,
        Name: 'Quản lý học phí của sinh viên',
        Permissions: [
          {Id: 0, FunctionDescription: '', FunctionName: 'Hiển thị danh sách học phí', IsActived: true, IsToViewIndex: true, ScreenId: 3},
          {Id: 0, FunctionDescription: '', FunctionName: 'Xem chi tiết biên lai', IsActived: false, IsToViewIndex: false, ScreenId: 3},
          {Id: 0, FunctionDescription: '', FunctionName: 'Xem chi tiết giấy tờ', IsActived: false, IsToViewIndex: false, ScreenId: 3}
        ]
      },
    );
    return screens;
  }
}
