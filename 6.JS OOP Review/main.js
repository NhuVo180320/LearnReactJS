/*
1. Object la gi?
Object (đối tượng) là một cấu trúc dữ liệu trong JavaScript dùng để lưu trữ các cặp key-value. Mỗi key (khóa) là một chuỗi (string) hoặc biểu tượng (symbol), và mỗi value (giá trị) có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả các đối tượng khác.      
*/

// const user = {
//   //thuoc tinh
//   name: "Lan",
//   age: 18,
//   "gioi tinh": "nam",
//   // phuong thuc
//   xinChao() {
//     console.log("Xin chao cac ban");
//     console.log("Minh " + this.age + " Tuoi");
//     return 1;
//   },
// };
// console.log(user); // Lan
// console.log(user.name); // Lan
// console.log(user.age); // 18
// // truy cap vao thuoc tinh co khoang trang bracket notation
// console.log(user["gioi tinh"]);
// console.log(user.xinChao()); // Xin chao cac ban

//class
class User {
  /*
    Constructor (hàm tạo) là một phương thức đặc biệt trong class, 
    được gọi tự động khi bạn tạo một instance (đối tượng) mới từ class đó.
    Chức năng của constructor:
    Khởi tạo các thuộc tính ban đầu cho object
    Thiết lập các giá trị mặc định
    Chuẩn bị object để sử dụng

    Lưu ý:
    Mỗi class chỉ có một constructor
    Constructor luôn được gọi khi dùng new để tạo object
    Nếu không định nghĩa constructor, JavaScript sẽ tự tạo một constructor rỗng
    */
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  xinChao() {
    console.log("Xin chao cac ban");
    console.log("Minh ten la " + this.name);
    return 1;
  }
}

const user1 = new User("An", 20);
console.log(user1.xinChao());
console.log(user1.name);
console.log(user1.age);
const user2 = new User("Ha", 30);
console.log(user2.xinChao());
console.log(user2.name);
console.log(user2.age);
