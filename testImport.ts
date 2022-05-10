import { ConsoleLogType, User, UserLevel } from "./types/index.js";

const user: User = {
  name: "Youtube",
  age: 99,
  userLevel: UserLevel.guest,
  showDiscount: (level: UserLevel) => {
    return "";
  },
};

const log = (text: string, isType: ConsoleLogType, user: User) => {
  switch (isType) {
    case ConsoleLogType.error:
      console.error("ERROR: ", text, user.name);
      break;
    case ConsoleLogType.log:
      console.log("LOG: ", text, user.name);
      break;
    case ConsoleLogType.warning:
      console.warn("WARNING: ", text, user.name);
      break;
  }
};

export default function print(name: string) {
  log("ddd", ConsoleLogType.log, user);
}
