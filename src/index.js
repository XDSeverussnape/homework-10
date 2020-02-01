import './styles.css';
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
