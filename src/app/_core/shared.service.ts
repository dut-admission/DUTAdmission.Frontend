import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private toastr: ToastrService) {
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  notifySuccess(message: string) {
    this.toastr.clear();
    this.toastr.success(`${message}`, 'Thành công', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-top-center'
    });
  }

  notifyError(message: string) {
    this.toastr.clear();
    this.toastr.error(`${message}`, 'Thất bại', {
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-top-center'
    });
  }
}
