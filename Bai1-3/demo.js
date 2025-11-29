// var là biến toàn cục cho sử dụng trước khi khởi tạo luôn
// let la bien cục bộ
//let không thể khai báo lại giá trị nhưng gán lại được, không ghi đè giá trị được
//var có thể ghi đè hay khởi tạo lại giá trị của biến
//var let và var không thể thay đổi từ khóa cho nhau
//var let co the khai bao lai cung ten bien khi 2 vi tri khai bao o 2 khoi code rieng
// var test1 = 'gg';
// {
//    let test1 = 1;
//    console.log(test1);
// }
// console.log(test1);


let a =  5;
var b = 'nhu';

//hang so - k the gan gia tri khac duoc 
const g = 6;

console.log(a)
b
//g = 7;
var u;

//chưa gán gia trị kq là undefined
console.log(u)
 {
    let t = 1

 }
 //đây là biến cục bộ không thể log ra giá trị được
 //console.log(t)

let str1,str2,str3;
str1=str2=str3= 'bbb';
let num1,num2;
[num1,num2] = [1,8]

console.log(str3,str2);
console.log(typeof(str3));
console.log(num1,num2);
console.log(typeof(num2));

//=== tra ve true neu = nhau va cung kieu du lieu
//nguoc lai !==
console.log('so sanh 1----', 3!=='g')
console.log('so sanh 2----', 3==='g')
console.log('so sanh 3----', 3=='3')

//chia du
// Vì:

// 5 chia 2 được 2

// 2 × 2 = 4

// 5 – 4 = 1 (đó là phần dư)

//phép mũ
//3**4 là 3 mũ 4
// trong code co the chia cho 0 va tra ve ket qua vo cuc
// console.log(3/0)
// console.log(-3/0)
// chia lay du cho 0 luon tra  ve NaN
// console.log(-3%0)





