import '../src/styles.css';
import json from '../src/data.json';

const Handlebars = require('handlebars');
const source = document.getElementById('template').innerHTML;
const template = Handlebars.compile(source);
const html = template(json);
document.querySelector('.js-menu').innerHTML = html;
const checkbox = document.getElementsByClassName('checkbox');
const body = document.getElementsByTagName('body')[0];
localStorage.setItem('check', 'false');

checkbox[0].addEventListener('click', e => {
  localStorage.setItem('bgcolor', 'light-theme');
  localStorage.setItem('atribute', 'checked');

  switch (e.target.checked) {
    case false:
      checkbox[0].removeAttribute(localStorage.getItem('atribute'));
      body.classList.remove('dark-theme');
      body.classList.add(localStorage.getItem('bgcolor'));
      break;
    case true:
      checkbox[0].setAttribute(
        localStorage.getItem('atribute'),
        localStorage.getItem('atribute'),
      );
      body.classList.remove('light-theme');
      localStorage.setItem('bgcolor', 'dark-theme');
      body.classList.add(localStorage.getItem('bgcolor'));
      break;
  }
});
