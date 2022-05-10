
let test_2 : string = "hello";
let num : number = 1000;

const run = (param1 : string, param2: number) => {
  console.log("param1", param1);
  console.log("param2", param2);
}

const testLoad = async () => {
  const fileName : string = "testImport";
  const module = await import(`./${fileName}.js`);
  module.default(100);
}
testLoad();

// run(test, num);

// test(1);

// console.log(num+" TypeScript");