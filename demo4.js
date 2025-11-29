// n = 6.49573;
// console.log('n chua lam tron');     
// console.log(n);     
// console.log('lam tron n');     
// console.log(Math.round(n));    
// console.log('n binh phuong'); 
// console.log(n**2);     

var s1 = 'hfgHJK';
console.log(s1[1]);
s1[1] = 'a';
console.log(s1[1]);
console.log(s1.length);
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.indexOf('j'));
console.log('tt\'dhkshdk');
console.log('tt\"dhkshdk');
console.log('tt\\dhkshdk');
console.log('tt\tdhkshdk');
console.log('tt\ndhkshdk')
console.log('tt\bdhkshdk');//xoa ki tu truoc ddos
console.log(`tt''''"""dhkshdk`); // dau `` cho phep nhúng biểu thức hàm giá trị vào chuỗi

var a = `gia tri a = ${1+8}`;
var b = `trieu dong`
var c = `nen ${[1,2,3] +4} `;
var d = [`ngay`,`thang`,`nam`];
console.log(a+' '+b+' \n '+c+' '+d[0]+' '+ 'moi co tien tra');
