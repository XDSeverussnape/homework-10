import '../src/styles.css';
import json from '../src/data.json';

const Handlebars = require('handlebars');
const source = document.getElementById('template').innerHTML;
const template = Handlebars.compile(source);
const html = template(json);
document.querySelector('.js-menu').innerHTML = html;
const checkbox = document.getElementsByClassName('checkbox');
const body = document.getElementsByTagName('body')[0];

checkbox[0].addEventListener('click', e => {
  localStorage.setItem('classList', 'light-theme');
  if (checkbox[0].hasAttribute('checked')) {
    localStorage.removeItem('atribute');
  }

  switch (e.target.checked) {
    case false:
      checkbox[0].removeAttribute('checked');
      body.classList.remove('dark-theme');
      body.classList.add(localStorage.getItem('classList'));

      break;
    case true:
      localStorage.setItem('atribute', 'checked');
      checkbox[0].setAttribute(
        localStorage.getItem('atribute'),
        localStorage.getItem('atribute'),
      );
      body.classList.remove('light-theme');
      localStorage.setItem('classList', 'dark-theme');
      body.classList.add(localStorage.getItem('classList'));
      break;
  }
  console.log(checkbox[0].getAttribute('checked'));
});
