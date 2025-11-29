const myVar = 10;
const myVar1 = 111;

function myFunction() {
  console.log("Hello, World!");
}
export { myVar, myVar1, myFunction };

//export tai noi khai bao

export const anotherVar = 20;

//file co 1 export default
let df2 = "day la bien df 2 trong name.js";
export default df2;

//export tai ham
export function testFunction() {
  console.log("export tai ham");
}
