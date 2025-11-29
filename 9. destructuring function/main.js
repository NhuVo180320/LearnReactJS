//destructuring function
const donHang1 = {
  maDonHang: 12345,
  tenKhachHang: "Nguyen Van A",
  tongTien: 1000000,
};
const donHang2 = {
  maDonHang: 444,
  tenKhachHang: "Phan Thi B",
  tongTien: 800000,
};

//khong su dung destructuring
function inDonHang(donHang) {
  const id = donHang.maDonHang;
  const name = donHang.tenKhachHang;
  const total = donHang.tongTien;
  console.log(
    `Ma don hang: ${id}, 
    Ten khach hang: ${name}, 
    Tong tien: ${total}`
  );
}
inDonHang(donHang1);
//su dung destructuring
console.warn("Su dung destructuring");
function inDonHangDestructuring({ maDonHang, tenKhachHang, tongTien }) {
  console.log(
    `Ma don hang: ${maDonHang}, 
    Ten khach hang: ${tenKhachHang}, 
    Tong tien: ${tongTien}`
  );
}
inDonHangDestructuring(donHang1);
inDonHangDestructuring(donHang2);
//truyen gia tri truc tiep
inDonHangDestructuring({
  maDonHang: 777,
  tenKhachHang: "Ten Mac Dinh",
  tongTien: 500000,
});
//su dung destructuring truyen tham so mac dinh
console.log("su dung destructuring truyen tham so mac dinh");
function inDonHangDestructuringDf({
  maDonHang = 111,
  tenKhachHang = "Khach hang mac dinh",
  tongTien = 999,
}) {
  console.log(`Ma don hang: ${maDonHang}`);
  console.log(`Ten khach hang: ${tenKhachHang}`);
  console.log(`Tong tien: ${tongTien}`);
}

inDonHangDestructuringDf({
  maDonHang: 555,
  tenKhachHang: "Le Van C",
  tongTien: 200000,
});
console.log(
  "su dung destructuring truyen tham so mac dinh khong co truyen gia tri"
);
inDonHangDestructuringDf({});

//su dung rest parameter trong destructuring
console.log("su dung rest parameter trong destructuring");
function inDonHangDestructuringDfRest({ maDonHang = 999, ...rest }) {
  console.log(rest);
}
inDonHangDestructuringDfRest(donHang2);
console.log("su dung rest parameter trong destructuring tu truyen");
inDonHangDestructuringDfRest({
  maDonHang: 555,
  tenKhachHang: "Le Van C",
  tongTien: 200000,
});
