'use strict';

const soushin = document.getElementById('soushin');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    soushin.textContent = '-----------------------送信完了-----------------------';
});