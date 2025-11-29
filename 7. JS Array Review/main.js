/**
 array (mang) la mot dang dac biet cua object,
 duoc thiet ke de luu tru nhieu gia tri theo thu tu va truy cap den chung bang chi so (index), bat dau tu 0.

 */
//1. Tao mang: mang duoc tao bang cap dau ngoac vuong []
//(ngoai ra con co cach tao bang constructor, tham khao series co ban)

const arrTraiCay = ["Nho", "Tao", "Cam", "Xoai", "Cam"];
console.log(typeof arrTraiCay);
console.log(arrTraiCay);
//truy cap cac phan tu cua mang
console.log(arrTraiCay[0]);
console.log(arrTraiCay[2]);

//2. arr long nhau va cac kieu du lieu trong mang
//mang co the chua nhieu loai du lieu khac nhau,
// bao gom string, number, boolean, object, function, null, undefined, hoac ca nhung mang khac

const arrMultitype = [
  //1.number
  1,
  //2. string
  "Hello",
  //3. boolean
  true,
  //4. null
  null,
  //5. undefined
  undefined,
  //6. arr
  [1, 2, 3],
  //7. object
  { name: "No Name", age: 19 },
  //8. function
  (xinChao = function () {
    console.log("Xin chao cac ban!");
  }),
];
console.log(arrMultitype);
console.log("arr location 5 la: " + arrMultitype[5]);
console.log("element 2 of position 5 la : " + arrMultitype[5][1]);

//3. Mot so phuong thuc thuong dung
//3.1 push(): them phan tu vao cuoi mang
arrTraiCay.push("Dua hau");
console.log(arrTraiCay);

//3.2 map(): tao ra mang moi bang cach thao tac tren tung phan tu cua mang ban dau
const arrNumOld = [1, 2, 3, 4, 5];
console.log("arrNumOld: " + arrNumOld);
const arrNumNew = arrNumOld.map((item) => item * 2);
console.log("arrNumNew: " + arrNumNew);

//3.3 bien doi phan tu mang thanh doi tuong moi
const arrNumNew2 = arrNumOld.map((item) => ({ num: item }));
console.log("arrNumNew2: ", arrNumNew2);

//3.3 findIndex, chi tim duoc vi tri dau tien thoa dieu kien
const indexNum = arrTraiCay.findIndex((item) => {
  return item === "Cam";
});
console.log("indexNum is: " + indexNum);

//bai tap tao ra arrTraiCayNew tung phan tu co dau ! o cuoi
const arrBienDoi = arrTraiCay.map((item) => {
  return item + " !";
});
console.log("arrBienDoi: ", arrBienDoi);
