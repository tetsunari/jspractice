// 'use strict';

// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// }

// // sum(1, 2, 3);
// // sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
// // console.log(total);

/*------------------------------------------------------------------*/

'use strict';

// function sum(a, b, c) {
//   return a + b + c;
// }

const sum = function(a, b, c) {
  return a + b + c;
};  //関数宣言には}の後に「;」を忘れないようにする

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

//上と同じ結果になる