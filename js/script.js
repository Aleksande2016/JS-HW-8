let html = document.createElement('html');
html.setAttribute('lang', 'ru');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

let metahttp = document.createElement('meta');
metahttp.setAttribute('http-equiv', 'X-UA-Compatible');
metahttp.setAttribute('content', 'IE=edge');

let metaN = document.createElement('meta');
metaN.setAttribute('name', 'viewport');
metaN.setAttribute('content', 'width=device-width, initial-scale=1.0');

let title = document.createElement('title');
title.innerHTML = 'Первый макет на JS';

document.head.insertBefore(title, document.head.firstElementChild);
document.head.insertBefore(metaN, document.head.firstElementChild);
document.head.insertBefore(metahttp, document.head.firstElementChild);
document.head.insertBefore(metaUtf8, document.head.firstElementChild);

let body = document.body;
console.log(body.childNodes);

let header = document.createElement('header');
document.body.appendChild(header);

let div = document.createElement('div');
div.classList.add('content');
header.appendChild(div);

let h1 = document.createElement('h1');
div.appendChild(h1);
h1.innerHTML = 'Choose Your Option';
h1.style.cssText = 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; font-weight: normal; text-align: center; font-size: 42px; padding-top: 110px; margin-bottom: 20px;'

let p = document.createElement('p');
div.appendChild(p);
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.style.cssText = 'font-size: 14px; color: #c3c3c3;'

div.style.cssText = 'text-align: center;'

let div1 = document.createElement('div');
div1.classList.add('container');
header.appendChild(div1);

div1.style.cssText = 'display: flex; margin: 65px auto 140px; width: 800px; height: 480px; justify-content: center; align-content: center; border: 1px solid #e8e9ed;'

let div2 = document.createElement('div'); // 1 1 1 1 1 1 1 1 1
div2.classList.add('item');
div1.appendChild(div2);

let p1 = document.createElement('p');
div2.appendChild(p1);
p1.innerHTML = 'Freelancer';
p1.classList.add('one');
p1.style.cssText = 'font-size: 14px; padding-top: 85px;font-weight: bold; text-transform: uppercase;'

let p2 = document.createElement('p');
div2.appendChild(p2);
p2.innerHTML = 'Initially </br>designed to';
p2.classList.add('big');
p2.style.cssText = 'font-size: 36px; margin: 20px;'

let p3 = document.createElement('p');
div2.appendChild(p3);
p3.innerHTML = 'But i must explain to you how all this</br> mistaken idea of denouncing';
p3.classList.add('text');
p3.style.cssText = 'font-size: 10px; color: #c3c3c3; padding-top: 20px; padding-bottom: 40px;'

let button = document.createElement('button');
button.classList.add('nav');
div2.appendChild(button);
button.innerHTML = 'Start here';

button.style.cssText = 'border: 3px solid #ffc80a; text-transform: uppercase; font-weight: bold; width: 170px; height: 50px; margin: 0 auto; border-radius: 50px; background: #fff;' // Why background: #fff ????

div2.style.cssText = 'text-align: center; width: 400px;'

let div2Clone = div2.cloneNode(true); //         2 2 2 2 2 2 2
let div3 = document.createElement('div2Clone');
div1.appendChild(div2Clone);

div2Clone.style.cssText = 'background: #8f75be; text-align: center; width: 400px;'

let classOne = div2Clone.querySelector('.one');
classOne.innerHTML = 'Studio';
classOne.style.cssText = 'color: #ffc80a; font-size: 14px; padding-top: 85px;font-weight: bold; text-transform: uppercase;' // ??? Why

let classBig = div2Clone.querySelector('.big');
classBig.style.cssText = 'color: #fff; font-size: 36px; margin: 20px;'

let classText = div2Clone.querySelector('.text');
classText.style.cssText = 'color: #fff; font-size: 10px; padding-top: 20px; padding-bottom: 40px;'

let classNav = div2Clone.querySelector('.nav');
classNav.style.cssText = 'border: 3px solid #ffc80a; text-transform: uppercase; font-weight: bold; width: 170px; height: 50px; margin: 0 auto; border-radius: 50px; background: #8f75be; color: #fff;'



console.log(document.body);
