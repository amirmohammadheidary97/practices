let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

//

let e, f, g;

e = f = g = 2 + 2;

alert(e); // 4
alert(f); // 4
alert(g); // 4
