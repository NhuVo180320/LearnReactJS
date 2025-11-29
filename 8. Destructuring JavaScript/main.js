// 1. desctructuring la mot tinh nang trong JS de
// trich xuat gia tri tu mang hoac doi tuong va gan cho cac bien rieng biet
//voi array: trich xuat du lieu dua tren index
//voi Object: trich xuat du lieu dua tren ten thuoc tinh (property name)

//2. Destructuring voi Array
//khong dung destructuring
const userName = ["Nhan", "Nguyen", "Quynh"];
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);
//or gon hon la dung destructuring
const [user01, , user03] = userName;
console.log(user01, user03);
//gan mac dinh gia tri
const [userA, , UserB, userC = "default name"] = userName;
console.log(userA, UserB, userC);
//destructuring voi rest parameter
const [userF, ...userConLai] = userName;
const [userK, userM, userY, ...userConLaiNull] = userName;
const [userL, userT, userO, userUndefined, ...userConLaiNulll] = userName;
console.log(userF);
console.log(userConLai);
console.log(userK);
console.log(userConLaiNull);
console.log(userUndefined);

//3. Destructuring voi Object
// luu y khi dung destructuring voi object thi ten bien phai giong ten thuoc tinh
const user = {
  nameU: "Nhan",
  ageU: 18,
};

//khong dung destructuring
const tenU = user.nameU;
const tuoiU = user.ageU;
console.log(tenU, tuoiU);

//dung destructuring
// const { nameU, ageU } = user;
// console.log(nameU, ageU);

//doi ten bien khi destructuring
// const { nameU: tenUser, ageU: tuoiUser, addressU = "Default Address" } = user;
// console.log("doi ten bien moi: ", tenUser, tuoiUser, addressU);

// rest parameter
const { nameU: tenUser, ...infoConLai } = user;
console.log(tenUser, infoConLai);
