import '../src/styles.css';
import json from '../src/data.json';

//var source = document.getElementById('template').innerHTML;
//var template = Handlebars.compile(source);
//var html = template(json);
//document.querySelector('.container').innerHTML = html;
//console.log(html);
//console.log(json);

const Handlebars = require('handlebars');
const source = document.getElementById('template').innerHTML;
const template = Handlebars.compile(source);
const html = template(json);
document.querySelector('.js-menu').innerHTML = html;
const checkbox = document.querySelector('.checkbox');
const body = document.getElementsByTagName('body')[0];
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
console.log(Theme.LIGHT);
console.log(Theme.DARK);

checkbox.addEventListener('change', e => {
  localStorage.setItem('color', 'white');
  const color = localStorage.getItem('color');
  console.log(color);

  if (e.target.checked == true) {
    localStorage.setItem('color', '#313131');
    body.style.background = localStorage.getItem('color');
    localStorage.setItem('check', 'true');
    e.target.checked = localStorage.getItem('check');
  }
  console.log(e.target.checked);
});
