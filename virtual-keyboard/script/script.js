"use strict"
import {keyEn} from "./keyEn.js";
import {keyRu} from "./keyRu.js";

const body = document.querySelector('body');
body.style.display = 'grid';
body.style.justifyItems = 'center';
body.style.alignItems = 'center';
body.style.position = 'absolute';
body.style.height = '100%';
body.style.width = '100%';
body.style.gridTemplateRows = '1fr 3fr 5fr repeat(2, 0.7fr)';
let flagKeyDown = 1;
let flagCapsLock = 'small';
let pressAlt = 0;
let pressShift = 0;
body.style.margin = '0';

function createFieldText() {
  const textCommitSecond = document.createElement('h3');
  body.prepend(textCommitSecond);
  textCommitSecond.innerHTML = 'Клавиатура создана в операционной системе Windows';
  textCommitSecond.style.margin = '0';
  const textCommitFirst = document.createElement('h3');
  body.prepend(textCommitFirst);
  textCommitFirst.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';
  textCommitFirst.style.margin = '0';
  const field = document.createElement('div');
  field.className = 'field';
  field.style.display = 'grid';
  field.style.placeContent = 'center';
  field.style.padding = '10px';
  field.style.justifyContent = 'center';
  field.style.alignContent = 'center';
  body.prepend(field);

  const fieldText = document.createElement('textarea');
  body.prepend(fieldText);
  fieldText.focus();
  fieldText.setAttribute('wrap', 'soft');
  fieldText.setAttribute('rows', '5');
  fieldText.className = 'text';
  fieldText.style.height = '70%';
  fieldText.style.width = '60%';
  fieldText.style.display = 'grid';
  fieldText.name = 'text';
  const title = document.createElement('h1');
  title.innerHTML = 'RSS Виртуальная клавиатура';
  body.prepend(title);
  title.style.margin = '0';
}

createFieldText();

function createBoard(keyLanguage) {
  const field = document.querySelector('.field');
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  field.appendChild(wrapper);
  for (let i = 0; i < keyLanguage.length; i++) {
    const row = document.createElement('div');
    wrapper.appendChild(row);
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
      keyButton.style.cursor = 'pointer';
      keyButton.style.background = 'black';
      keyButton.style.border = '1px solid gray';
      keyButton.style.borderRadius = '5px';
      keyButton.style.lineHeight = '2.3rem';
      keyButton.style.transition = 'all .3s';
      keyButton.style.gridColumn = n + 1;
      const small = document.createElement('span');
      small.className = `small ${keyLanguage[i][n][0]}`;
      small.setAttribute('value', keyLanguage[i][n][2]);
      small.style.background = 'inherit';
      small.style.cursor = 'pointer';
      small.innerHTML = keyLanguage[i][n][0]
      keyButton.appendChild(small);
      const big = document.createElement('span');
      big.className = `big ${keyLanguage[i][n][1]}`;
      big.style.display = 'none';
      big.style.cursor = 'pointer';
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
  listener();
}

if (localStorage.language === undefined) {
  createBoard(keyEn);
} else {
  localStorage.language * 1 ? createBoard(keyRu) : createBoard(keyEn);
}

function listener() {
  let button = document.querySelectorAll('.button');
  button.forEach(but => but.addEventListener('mouseover', hover));
  button.forEach(but => but.addEventListener('mouseout', hoverEnd));
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);
  button.forEach(but => but.addEventListener('mousedown', mouseDown));
  button.forEach(but => but.addEventListener('mouseup', hover));
  button.forEach(but => but.addEventListener('click', handleClick));
  window.addEventListener('keydown', function (e) {
    e.preventDefault();
  })
}

function hover(e) {
  if (e.target.className === 'button') {
    e.target.style.background = 'lightgray';
    e.target.style.borderRadius = '5px';
    let children = e.target.children;
    for (let child of children) {
      child.style.background = 'inherit';
    }
  } else {
    e.target.style.background = 'inherit';
    e.target.parentElement.style.background = 'lightgray';
    e.target.parentElement.style.borderRadius = '5px';
  }
}

function hoverEnd(e) {
  if (e.target.className === 'button') {
    e.target.style.background = 'black';
    let children = e.target.children;
    for (let child of children) {
      child.style.background = 'inherit';
    }
  } else {
    e.target.style.background = 'inherit';
    e.target.parentElement.style.background = 'black';
  }
}

function mouseDown(e) {
  if (e.target.className === 'button') {
    e.target.style.background = 'dimgray';
    e.target.style.borderRadius = '20px';
    let children = e.target.children;
    for (let child of children) {
      child.style.background = 'inherit';
    }
  } else {
    e.target.style.background = 'inherit';
    e.target.parentElement.style.background = 'dimgray';
    e.target.parentElement.style.borderRadius = '20px';
  }
}

function keyDown(e) {
  let children = document.querySelectorAll('span');
  children.forEach(child => {
    if (child.getAttribute('value') * 1 === e.keyCode && child.style.display !== 'none') {
      logicalPressKey(child);
      let buttonValue = child.getAttribute('value');
      if (buttonValue * 1 !== 16 && buttonValue * 1 !== 18 && buttonValue * 1 !== 17) {
        child.parentElement.style.background = 'dimgray';
        child.parentElement.style.borderRadius = '20px';
      }
    }
  })
  switch (e.keyCode) {
    case 16:
      const shift = document.querySelectorAll('.Shift');
      if (flagKeyDown === 1) {
        showButton();
        if (e.location === 1) {
          shift[0].parentElement.style.background = 'dimgray';
          shift[0].parentElement.style.borderRadius = '20px';
        } else {
          shift[2].parentElement.style.background = 'dimgray';
          shift[2].parentElement.style.borderRadius = '20px';
        }
        flagKeyDown = 0;
      }
      break;
    case 18:
      const alt = document.querySelectorAll('.Alt');
      if (flagKeyDown === 1) {
        if (e.location === 1) {
          alt[0].parentElement.style.background = 'dimgray';
          alt[0].parentElement.style.borderRadius = '20px';
        } else {
          alt[2].parentElement.style.background = 'dimgray';
          alt[2].parentElement.style.borderRadius = '20px';
        }
        flagKeyDown = 0;
      }
      pressAlt = 1;
      doublePress();
      break;
    case 17:
      const ctrl = document.querySelectorAll('.Ctrl');
      pressShift = 1;
      doublePress();
      if (flagKeyDown === 1) {
        if (e.location === 1) {
          ctrl[0].parentElement.style.background = 'dimgray';
          ctrl[0].parentElement.style.borderRadius = '20px';
        } else {
          ctrl[2].parentElement.style.background = 'dimgray';
          ctrl[2].parentElement.style.borderRadius = '20px';
        }
        flagKeyDown = 0;
      }
      break;
    case 20:
      capsLock()
      break;
    default:
      const key = document.querySelectorAll('span');
      if (flagKeyDown === 1) {
        key.forEach(but => {
          if (but.getAttribute('value') * 1 === e.keyCode) {
            but.parentElement.style.background = 'dimgray';
            but.parentElement.style.borderRadius = '20px';
          }
        })
      }
      flagKeyDown = 0;
      break;
  }
}

function keyUp(e) {
  switch (e.keyCode) {
    case 16:
      const shift = document.querySelectorAll('.Shift');
      showButton();
      if (e.location === 1) {
        shift[0].parentElement.style.background = 'black';
        shift[0].parentElement.style.borderRadius = '5px';
      } else {
        shift[2].parentElement.style.background = 'black';
        shift[2].parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1;
      break;
    case 18:
      const alt = document.querySelectorAll('.Alt');
      if (e.location === 1) {
        alt[0].parentElement.style.background = 'black';
        alt[0].parentElement.style.borderRadius = '5px';
      } else {
        alt[2].parentElement.style.background = 'black';
        alt[2].parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1;
      pressAlt = 0;
      break;
    case 17:
      const ctrl = document.querySelectorAll('.Ctrl');
      pressShift = 0;
      if (e.location === 1) {
        ctrl[0].parentElement.style.background = 'black';
        ctrl[0].parentElement.style.borderRadius = '5px';
      } else {
        ctrl[2].parentElement.style.background = 'black';
        ctrl[2].parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1
      break;
    case 20:
      break;
    default:
      const key = document.querySelectorAll('span');
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

function doublePress() {
  if (pressAlt === 1 && pressShift === 1) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    localStorage.language * 1 ? createBoard(keyEn) : createBoard(keyRu);
    localStorage.language = localStorage.language * 1 ? 0 : 1;
  }
}

function showButton() {
  const smallKey = document.querySelectorAll('.small');
  const bigKey = document.querySelectorAll('.big');
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

function handleClick(e) {
  if (e.target.className === 'button') {
    let children = e.target.children;
    for (let child of children) {
      if (child.style.display !== 'none') {
        logicalPressKey(child);
      }
    }
  } else {
    logicalPressKey(e.target);
  }
}

function logicalPressKey(child) {
  const textValue = document.querySelector('.text');
  textValue.focus();
  const positionCursor = textValue.selectionStart;
  switch (child.innerHTML) {
    case 'Enter':
      let textEnterStart = textValue.value.slice(0, positionCursor);
      let textEnterEnd = textValue.value.substr(positionCursor);
      textValue.value = textEnterStart + '\n' + textEnterEnd;
      textValue.setSelectionRange(positionCursor + 1, positionCursor + 1);
      break;
    case 'Backspace':
      let textBackspaceStart = textValue.value.slice(0, positionCursor - 1);
      let textBackspaceEnd = textValue.value.substr(positionCursor);
      textValue.value = textBackspaceStart + textBackspaceEnd;
      textValue.setSelectionRange(positionCursor - 1, positionCursor - 1);
      break;
    case 'Del':
      let textDeleteStart = textValue.value.slice(0, positionCursor);
      let textDeleteEnd = textValue.value.substr(positionCursor + 1);
      textValue.value = textDeleteStart + textDeleteEnd;
      textValue.setSelectionRange(positionCursor, positionCursor);
      break;
    case 'Tab':
      let textTabStart = textValue.value.slice(0, positionCursor);
      let textTabEnd = textValue.value.substr(positionCursor);
      textValue.value = textTabStart + '    ' + textTabEnd;
      textValue.setSelectionRange(positionCursor + 4, positionCursor + 4);
      break;
    case ' ':
      let textStart = textValue.value.slice(0, positionCursor);
      let textEnd = textValue.value.substr(positionCursor);
      textValue.value = textStart + ' ' + textEnd;
      textValue.setSelectionRange(positionCursor + 1, positionCursor + 1);
      break;
    default:
      if (child.innerHTML.length === 1) {
        let textAddStart = textValue.value.slice(0, positionCursor);
        let textAddEnd = textValue.value.substr(positionCursor);
        textValue.value = textAddStart + child.innerHTML + textAddEnd;
        textValue.setSelectionRange(positionCursor + 1, positionCursor + 1);
        break;
      }
  }
}