enum UserLevel {
  admin,
  user,
  guest,
}

class User {
  name: string;
  age?: number;
  userLevel: UserLevel;
  showDiscount: (level: UserLevel) => string;
}

export { User, UserLevel };
