//1. lay 1 phan tu can thiet
// import { myVar } from "./named.js";
// console.log(myVar);

//2. lay 1 vai hoac nhieu phan tu can thiet
// import { myVar, myFunction } from "./named.js";
// console.log("lay 1 vai hoac nhieu phan tu can thiet");
// console.log(myVar);
// myFunction();

//3. lay toan bo phan tu trong file
import * as name from "./named.js";
console.log("---lay toan bo phan tu trong file");
console.log(name.myVar);
name.myFunction();
console.log("bien df k lay ra duoc phai import rieng");
console.log(name.df2);

//4. import default
// import df from "./default.js";
// console.log(df);
import total from "./default.js";
console.log("---Day la bien default");
console.log(total(5, 10));
console.log("---export tai noi khai bao");
console.log(name.anotherVar);

//file co 1 export default
// import df2 from "./named.js";
// console.log(df2);
//or

import df2, { myVar, myFunction, testFunction } from "./named.js";
console.log("---export named");
console.log(df2, myVar);
myFunction();
testFunction();

//5. doi ten khi import

//5.1 import df: dat ten tuy y
import tuyY from "./default.js";
console.log("---import df: dat ten tuy y");
console.log(tuyY(1, 3));

//5.1 import named: dat ten voi as va phai dung ten cu
// import { myVar1 } from "./named.js";
import { myVar1 as tenMoi, myFunction as functionMoi } from "./named.js";
console.log("---import named: dat ten voi as va phai dung ten cu");
console.log(tenMoi);
functionMoi();
