'use strict';

// 定数 const
// 変数 let var

let price = 150;    // varでも良い
const prrice = 150; //定数宣言のままだとエラー
console.log(price * 140);
console.log(price * 160);

price = 170;
console.log(price * 140);
console.log(price * 160);