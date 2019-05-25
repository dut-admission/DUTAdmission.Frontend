export class Permission {
  Id: number;
  ScreenId: number;
  FunctionName: string;
  FunctionDescription: string;
  IsActived: boolean;
  IsToViewIndex: boolean;
}

export class Screen {
  Id: number;
  Name: string;
  Permissions: Permission[];

  constructor() {
    this.Permissions = [];
  }
}
