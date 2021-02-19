'use strict';

{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.className = 'my-color my-border';
    // targetNode.classList.add('my-color');    //classList.add('my-color') としてあげれば、既存のクラスの設定に my-color を新しく追加してくれる


    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }
    // -----------------------------------------------------------------------------
    targetNode.classList.toggle('my-color');     // 上記のif文と同じ動作をする
  });
}