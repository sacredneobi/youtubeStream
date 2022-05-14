import { IUser, IUIUser } from "./types/interface/index.js";

const user: IUser = {
  nameFirst: "SACRED",
  nameSecond: "YOUTUBE",
  nameLast: "STREAM",
  role: { isAdmin: true, isGuest: false, isPublic: false },
};

const user2: IUIUser = {
  nameFirst: "SACRED_2",
  nameSecond: "YOUTUBE",
  role: { isAdmin: false, isGuest: true, isPublic: false },
  getFIO: function (): string {
    return "HELLO YOUTUBE";
  },
};

const test = (user: IUser) => {
  console.log(user);
};

test(user);
