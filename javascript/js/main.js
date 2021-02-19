'use strict';

{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    document.getElementById('target').textContent = 'Changed!';     //上三つは同じ結果
  }

  setTimeout(update, 1000);
}