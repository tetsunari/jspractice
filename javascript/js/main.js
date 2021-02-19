'use strict';

// { 
//       document.querySelector('button').addEventListener('click', () => {
//         document.getElementById('target').textContent = 'Changed!';
//     });
// }

/**
 * addEventListener()は第一引数にイベントの種類
 */
    
{
    function update() {
        document.getElementById('target').textContent = 'Change!';
    }
    document.querySelector('button').addEventListener('click', update);
}