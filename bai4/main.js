//4. khai bao ham Function declaration
function xinChao() {
  console.log("Xin chao cac ban");
}

xinChao();

function xinChao2(name) {
  console.log("Xin chao " + name);
}
xinChao2("Tuan Anh");

function xinChao3(name = "No name") {
  console.log("Xin chao " + name);
}
xinChao3();
xinChao3("Nguyen Van A");

function tinhTong(a = 5, b) {
  return a + b;
}
console.log("tong: " + tinhTong(undefined, 10));
console.log("truyen thieu tham so: " + tinhTong(10));

//4.1 khai bao ham Function expression
//luu y: ham phai co than ham
let tich = function (a, b) {
  return a * b;
};
console.log("tich: " + tich(5, 10));

//4.2 arrow function or goi la ham an danh aninomous function
let multiplyArrowFunction = (c, d) => {
  let product = c * d;
  let sum = c + d;
  return product + sum;
};

let kq = multiplyArrowFunction(5, 10);
console.log("kq arrow function: " + kq);
//4.2.1 luu y: khong can phai co than ham
let tinhHieu = (a, b) => a - b;
let kq5 = tinhHieu(10, 5);
console.log("hieu: " + kq5);

//4.3 khi tra ve mot doi object dung arrow function
// let person = (name, age) => {
//   return { "Ho va ten": name, Tuoi: age };
// };
// let person = (ten, haha) => ({ "Ho va ten": ten, haha: tuoi });
// console.log(person("VoThiQuynhNhu", 18));
let person = (ten, tuoi) => ({
  Ten: ten,
  Tuoi: tuoi,
});
console.log(person("VoThiQuynhNhu", 18));

let a = (vonghia, conghia) => ({
  "vonghia lam": vonghia,
  "conghia lam": conghia,
});
console.log(a("n", "b"));
