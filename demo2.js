let t = 9
t/=3
console.log(t)
while(t<10){
    t+=3
    console.log(t)
}


// AND → cả hai đều đúng thì mới đúng

// OR → một trong hai đúng là đúng

// XOR → đúng nếu hai bên khác nhau
let m = 1;
console.log( t++); 
console.log( ++t); 

let n = '-1';
console.log(+n);
console.log(-n);
//them dau cong hoac tru de chuyen chuoi thanh so
console.log(typeof(+n));

//
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

let k = Number(5);
console.log(k);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(k));
console.log(Number.isNaN(Number('abc')));
console.log(Number.isNaN(Number('1')));
console.log(Number.isNaN(Number(1)));
console.log(Number.isInteger(5.5));
console.log(Number.isFinite(5.5));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));

