'use strict';

{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.className = 'my-color';   //クリックするとボーダーが消える
    targetNode.className = 'my-color my-border';
  });
}