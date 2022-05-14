interface IRole {
  isAdmin: boolean;
  isGuest: boolean;
  isPublic: boolean;
}

interface IUser {
  readonly nameFirst: string;
  nameSecond: string;
  nameLast?: string;
  readonly role: IRole;
}

interface IUIUser extends IUser {
  readonly getFIO: () => string;
}

export { IUser, IUIUser };
