'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    const selectedColors = [];

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    // li.textContent = selectedColors.join(',');   //で表現されるときに , 区切りになるので、 , 区切りの場合だったらこのように join() を書かなくても OK 
    li.textContent = selectedColors;
    document.querySelector('ul').appendChild(li);
  });
}