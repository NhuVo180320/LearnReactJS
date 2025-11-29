//1. Spread Operator voi arr
//1.1 Them 1 phan tu moi
let soThich = ["Doc sach", "Du lich", "Am nhac"];
const soThichMoi = "Da bong";
soThich = [...soThich, "Da cau", soThichMoi];
console.log("Them 1 phan tu moi", soThich);

//1.2 Them 1 mang moi vao mang (chong mang)
const soThichMoi2 = ["Da bong", "Choi game"];
soThich = [soThich, "Da cau", soThichMoi2];
//kq= mang long mang
console.log("Them 1 mang moi vao mang", soThich);
soThich = [soThich, "Da cau", ...soThichMoi2];
//kq= mang don
console.log("Them 1 mang moi vao mang", soThich);

//2. Spread Operator voi obj
let user = {
  name: "Nguyen Van A",
  age: 30,
  email: "nguyenvana@gmail.com",
};
//2.1 Them thuoc tinh moi
const updatesThuocTinh = {
  address: "123 Duong ABC, Q1, TP.HCM",
  phone: "0123456789",
};

user = { ...user, ...updatesThuocTinh };
console.log("Them thuoc tinh moi", user);

//2.1 neu thuoc tinh moi co 1 thuoc tinh trung ten voi thuoc tinh cu thi no se ghi de
const updatesThuocTinh2 = {
  address: "My Tho, Tien Giang",
  name: "Tran Thi B",
};
user = { ...user, ...updatesThuocTinh2 };
console.log("Them thuoc tinh moi", user);
