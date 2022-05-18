import fs from "fs";

class SettingKeyValue<V> {
  name: string;
  value: V;
}

const convertDataSetting = <T extends any, R>(data: string, defaultValue: R) => {
  let settings: T[] = data
    .split("\n")
    .filter((item: string): boolean => item !== "")
    .map((item: string): T => {
      let keyValue: string[] = item.split(": ");

      if (typeof defaultValue === "number") {
        return { name: keyValue[0], value: parseFloat(keyValue[1]) } as T;
      }

      return { name: keyValue[0], value: keyValue[1] } as T;
    });
  return settings;
};

const writeSetting = <N, V>(name: N, value: V) => {
  fs.writeFileSync("./setting.txt", `${name}: ${value}\n`);
};

const readSetting = <N, R>(name: N, defaultValue: R): R => {
  let data: string = fs.readFileSync("./setting.txt", "utf8");

  let setting: SettingKeyValue<R> = convertDataSetting<SettingKeyValue<R>, R>(data, defaultValue).find(
    (item: SettingKeyValue<R>): SettingKeyValue<R> => {
      if (item.name === name.toString()) {
        return item;
      }
      return;
    }
  );

  return setting?.value;
};

// writeSetting<string, number>("port", 9779);
let data = readSetting<string, number>("port", -1);
console.log(typeof data, data);

// import { IUser, IUIUser } from "./types/interface/index.js";

// const user: IUser = {
//   nameFirst: "SACRED",
//   nameSecond: "YOUTUBE",
//   nameLast: "STREAM",
//   role: { isAdmin: true, isGuest: false, isPublic: false },
// };

// const user2: IUIUser = {
//   nameFirst: "SACRED_2",
//   nameSecond: "YOUTUBE",
//   role: { isAdmin: false, isGuest: true, isPublic: false },
//   getFIO: function (): string {
//     return "HELLO YOUTUBE";
//   },
// };

// const test = (user: IUser) => {
//   console.log(user);
// };

// test(user);
