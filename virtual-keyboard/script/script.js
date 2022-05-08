"use strict"
import {keyEn} from "./keyEn.js";
import {keyRu} from "./keyRu.js";

let body = document.querySelector('body');

let flagKeyDown = 1;
let flagCapsLock = 'small';
let pressAlt = 0;
let pressShift = 0;

body.style.margin = '0';


function createBoard(keyLanguage) {
  let field = document.createElement('div');
  field.className = 'field'
  field.style.display = 'grid';
  field.style.height = '100%';
  field.style.width = '100%';
  field.style.position = 'absolute';
  field.style.justifyContent = 'center';
  field.style.alignContent = 'center';
  body.prepend(field);
  for (let i = 0; i < keyLanguage.length; i++) {
    const row = document.createElement('div');
    field.appendChild(row);
    row.className = 'row' + i;
    row.style.display = 'grid';
    row.style.columns = 'auto';
    row.style.justifyContent = 'center';
    row.style.gridColumnGap = '0.5rem';
    for (let n = 0; n < keyLanguage[i].length; n++) {
      const keyButton = document.createElement('div');
      row.appendChild(keyButton);
      keyButton.className = 'button';
      keyButton.style.width = '100%';
      keyButton.style.height = '2.3rem';
      keyButton.style.margin = '0.2em 0';
      keyButton.style.textAlign = 'center';
      keyButton.style.color = 'white';
      keyButton.style.background = 'black';
      keyButton.style.border = '1px solid gray';
      keyButton.style.borderRadius = '5px';
      keyButton.style.lineHeight = '2.3rem';
      keyButton.style.transition = 'all .3s ';
      keyButton.style.gridColumn = n + 1;
      const small = document.createElement('span');
      small.className = `small ${keyLanguage[i][n][0]}`;
      small.setAttribute('value', keyLanguage[i][n][2]);
      small.style.background = 'inherit';
      small.innerHTML = keyLanguage[i][n][0]
      keyButton.appendChild(small);
      const big = document.createElement('span');
      big.className = `big ${keyLanguage[i][n][1]}`;
      big.style.display = 'none';
      big.style.background = 'inherit';
      big.innerHTML = keyLanguage[i][n][1]
      big.setAttribute('value', keyLanguage[i][n][2]);
      keyButton.appendChild(big);
    }
  }

  let row0 = document.querySelector('.row0');
  row0.style.gridTemplateColumns = 'repeat(13, 1fr) 2.3fr';
  let row1 = document.querySelector('.row1');
  row1.style.gridTemplateColumns = '1.1fr repeat(14, 1fr)';
  let row2 = document.querySelector('.row2');
  row2.style.gridTemplateColumns = '2fr repeat(11, 1fr) 2.2fr';
  let row3 = document.querySelector('.row3');
  row3.style.gridTemplateColumns = '2fr repeat(11, 1fr) 2.2fr';
  let row4 = document.querySelector('.row4');
  row4.style.gridTemplateColumns = 'repeat(3, 1fr) 8fr repeat(5, 0.97fr)';
  listener()
}

createBoard(keyEn);

function listener() {
  let button = document.querySelectorAll('.button');
  button.forEach(but => but.addEventListener('mouseover', hover));
  button.forEach(but => but.addEventListener('mouseout', hoverEnd));
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);
  window.addEventListener('keydown', function (e) {
    e.preventDefault();

  })
}
//*******************HOVER*********************

function hover(e) {
  e.target.style.background = 'lightgray';
}

function hoverEnd(e) {
  e.target.style.background = 'black';
}
//------------------------------------------------------------
//---------------------KeyDown--------------------


function keyDown(e) {
  switch (e.keyCode) {
    case 16:
      const shiftLeft = document.querySelector('.shiftLeft');
      const shiftRight = document.querySelector('.shiftRight');
      if (flagKeyDown === 1) {
        showButton();
        if (e.location === 1) {
          shiftLeft.parentElement.style.background = 'dimgray';
          shiftLeft.parentElement.style.borderRadius = '20px';
        } else {
          shiftRight.parentElement.style.background = 'dimgray';
          shiftRight.parentElement.style.borderRadius = '20px';
        }
        flagKeyDown = 0;
      }
      break;

    case 18:
      const altLeft = document.querySelector('.leftAlt');
      const altRight = document.querySelector('.rightAlt');

      if (flagKeyDown === 1) {
        if (e.location === 1) {
          altLeft.parentElement.style.background = 'dimgray';
          altLeft.parentElement.style.borderRadius = '20px';
        } else {
          altRight.parentElement.style.background = 'dimgray';
          altRight.parentElement.style.borderRadius = '20px';
        }
        flagKeyDown = 0;
      }
      pressAlt = 1;
      doublePress();
      break;

    case 17:
      const ctrlLeft = document.querySelector('.leftControl');
      const ctrlRight = document.querySelector('.rightControl');
      pressShift = 1;
      doublePress();
      if (flagKeyDown === 1) {
        if (e.location === 1) {
          ctrlLeft.parentElement.style.background = 'dimgray';
          ctrlLeft.parentElement.style.borderRadius = '20px';
        } else {
          ctrlRight.parentElement.style.background = 'dimgray';
          ctrlRight.parentElement.style.borderRadius = '20px';
        }
        flagKeyDown = 0;
      }
      break;

    case 20:
      capsLock()
      break;

    default:
      if (flagKeyDown === 1) {
        let key = document.querySelectorAll('span');
        key.forEach(but => {
          if (but.getAttribute('value') * 1 === e.keyCode) {
            but.parentElement.style.background = 'lightgray';
            but.parentElement.style.borderRadius = '20px';
          }
          // }
        })
      }
      flagKeyDown = 0;
      break;
  }
}

function keyUp(e) {
  switch (e.keyCode) {
    case 16:
      const shiftLeft = document.querySelector('.shiftLeft');
      const shiftRight = document.querySelector('.shiftRight');
      showButton();

      if (e.location === 1) {
        shiftLeft.parentElement.style.background = 'black';
        shiftLeft.parentElement.style.borderRadius = '5px';
      } else {
        shiftRight.parentElement.style.background = 'black';
        shiftRight.parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1
      break;

    case 18:
      const altLeft = document.querySelector('.leftAlt');
      const altRight = document.querySelector('.rightAlt');
      if (e.location === 1) {
        altLeft.parentElement.style.background = 'black';
        altLeft.parentElement.style.borderRadius = '5px';
      } else {
        altRight.parentElement.style.background = 'black';
        altRight.parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1
      pressAlt = 0;
      break;

    case 17:
      const ctrlLeft = document.querySelector('.leftControl');
      const ctrlRight = document.querySelector('.rightControl');
      pressShift = 0;
      if (e.location === 1) {
        ctrlLeft.parentElement.style.background = 'black';
        ctrlLeft.parentElement.style.borderRadius = '5px';
      } else {
        ctrlRight.parentElement.style.background = 'black';
        ctrlRight.parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1
      break;

    case 20:
      break;

    default:
      let key = document.querySelectorAll('span');
      key.forEach(but => {
        if (but.getAttribute('value') * 1 === e.keyCode) {
          but.parentElement.style.background = 'black';
          but.parentElement.style.borderRadius = '5px';
        }
      })
      flagKeyDown = 1;
      break;
  }
}

let language = 'en';

function doublePress() {
  if (pressAlt === 1 && pressShift === 1) {
    const field = document.querySelector('.field')
    field.remove()
    language === 'en' ? createBoard(keyRu) : createBoard(keyEn);
    language = language === 'en' ? 'ru' : 'en';
  }
}

const smallKey = document.querySelectorAll('.small');
const bigKey = document.querySelectorAll('.big');


function showButton() {
  if (flagCapsLock !== 'small') {
    smallKey.forEach(key => key.style.display = 'inline-block');
    bigKey.forEach(key => key.style.display = 'none');
  } else {
    smallKey.forEach(key => key.style.display = 'none');
    bigKey.forEach(key => key.style.display = 'inline-block');
  }
  flagCapsLock = flagCapsLock === 'small' ? 'big' : 'small';
}

function capsLock() {
  let keyButton = document.querySelectorAll('span');
  keyButton.forEach(but => {
    if (but.innerHTML.length === 1) {
      if (but.innerHTML.charCodeAt(0) >= 65 &&
        but.innerHTML.charCodeAt(0) <= 90 ||
        but.innerHTML.charCodeAt(0) >= 1040 &&
        but.innerHTML.charCodeAt(0) <= 1071) {
        but.style.display = flagCapsLock === 'small' ? 'inline-block' : 'none';
      }
      if (but.innerHTML.charCodeAt(0) >= 97 &&
        but.innerHTML.charCodeAt(0) <= 122 ||
        but.innerHTML.charCodeAt(0) >= 1072 &&
        but.innerHTML.charCodeAt(0) <= 1103) {
        but.style.display = flagCapsLock === 'small' ? 'none' : 'inline-block';
      }
    }
    if (but.innerHTML === 'CapsLock') {
      but.parentElement.style.background = flagCapsLock === 'small' ? 'lightGray' : 'black';
      but.parentElement.style.borderRadius = flagCapsLock === 'small' ? '20px' : '5px';
    }
  })
  flagCapsLock = flagCapsLock === 'small' ? 'big' : 'small';
}
