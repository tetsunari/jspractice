'use strict';

{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';    //1番目のpタグ変わる
    // document.querySelectorAll('p')[1].textContent = 'Changed!';  //２番目のpタグ変わる
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });     //列ごとのpタグに作用する
  }

  setTimeout(update, 1000);
}

/** 
 * 重要
 * DOM で要素を取得する方法はこのようにいろいろありますが、 
 * id 属性が付いていたら getElementById() 、 
 * id 属性がなければ querySelector() か querySelectorAll() 
 * を使ってあげると良いでしょう。
 */