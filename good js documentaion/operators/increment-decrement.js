let counter = 1;
let a = ++counter; // (*)
console.log(a); // 2
console.log(counter); // 2

let counter2 = 1;
let b = counter2++; // (*) changed ++counter to counter++
console.log(b); // 1
console.log(counter2); // 2

/* 
  const b = counter++ :
    b and counter increments get incremented

  const b = ++counter :
    does not affect on b . just increments counter 
*/
