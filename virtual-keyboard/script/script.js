// "use strict"
import {keyEnSmall} from "./keyEnSmall.js";
import {keyEnBig} from "./keyEnBig.js";

let body = document.querySelector('body');
let field = document.createElement('div');
body.prepend(field);

field.className = 'field'
field.style.display = 'grid';
field.style.height = '100%';
field.style.width = '100%';
body.style.margin = '0';
field.style.position = 'absolute';
field.style.justifyContent = 'center';
field.style.alignContent = 'center';

function createBoard() {
  for (let i = 0; i < keyEnSmall.length; i++) {
    const row = document.createElement('div');
    field.appendChild(row);
    row.className = 'row' + i;
    row.style.display = 'grid';
    row.style.columns = 'auto';
    row.style.justifyContent = 'center';
    row.style.gridColumnGap = '0.5rem';
    for (let n = 0; n < keyEnSmall[i].length; n++) {
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
      const smallEn = document.createElement('span');
      smallEn.className = `${keyEnSmall[i][n][0]} smallEn`;
      smallEn.style.background = 'inherit';
      const textSmallEn = document.createTextNode(keyEnSmall[i][n][0]);
      smallEn.appendChild(textSmallEn);
      keyButton.appendChild(smallEn);
      const bigEn = document.createElement('span');
      bigEn.className = `${keyEnSmall[i][n][1]} bigEn`;
      bigEn.style.display = 'none';
      bigEn.style.background = 'inherit';
      const textBigEn = document.createTextNode(keyEnSmall[i][n][1]);
      bigEn.appendChild(textBigEn);
      keyButton.appendChild(bigEn);
      const smallRu = document.createElement('span');
      smallRu.className = `${keyEnSmall[i][n][2]} smallRu`;
      smallRu.style.display = 'none';
      smallRu.style.background = 'inherit';
      const textSmallRu = document.createTextNode(keyEnSmall[i][n][2]);
      smallRu.appendChild(textSmallRu);
      keyButton.appendChild(smallRu);
      const bigRu = document.createElement('span');
      bigRu.className = `${keyEnSmall[i][n][3]} bigRu`;
      bigRu.style.display = 'none';
      bigRu.style.background = 'inherit';
      const textBigRu = document.createTextNode(keyEnSmall[i][n][3]);
      bigRu.appendChild(textBigRu);
      keyButton.appendChild(bigRu);
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


// class Element {
//   constructor(selector) {
//     this.selector = document.createElement(selector);
//   }
// }
//
// class Key extends Element {
//   constructor(options) {
//     super(options.selector);
//     const parent = document.querySelector(options.parent);
//     parent.prepend(this.selector);
//     this.selector.innerHTML = options.value;
//     this.selector.className = options.className;
//     this.selector.id = options.id;
//     this.selector.style.padding = options.padding;
//     this.selector.style.position = options.position;
//     this.selector.style.color = options.color;
//     this.selector.style.background = options.background;
//     this.selector.style.width = options.width;
//     this.selector.style.height = options.height;
//     this.selector.style.display = options.display;
//     this.selector.style.margin = options.margin;
//     this.selector.style.textAlign = options.textAlign;
//     this.selector.style.border = options.border;
//     this.selector.style.borderRadius = options.borderRadius;
//     this.selector.style.gridAutoColumns = options.columns;
//     this.selector.style.gridColumn = options.columnNumber;
//     this.selector.style.justifyContent = options.justifyContent;
//     this.selector.style.alignItems = options.alignItems;
//     this.selector.style.lineHeight = options.lineHeight;
//     this.selector.style.gridColumnGap = options.gridColumnGap;
//     this.selector.style.transition = options.transition;
//   }
// }
//
// function rendered(keyBoard) {
//   field.innerHTML = ''
//   for (let i = keyBoard.length - 1; i >= 0; i--) {
//     const wrapper = new Key({
//       className: 'wrapper' + i,
//       selector: 'div',
//       parent: '.field',
//       display: 'grid',
//       margin: '0',
//       columns: 'auto',
//       value: '',
//       justifyContent: 'center',
//       gridColumnGap: '0.5rem',
//     })
//     for (let n = keyBoard[i].length - 1; n >= 0; n--) {
//       const nav = new Key({
//         selector: 'span',
//         parent: '.wrapper' + i,
//         value: keyBoard[i][n][0],
//         margin: '0.2em 0',
//         id: keyBoard[i][n][0],
//         className: 'button',
//         width: '100%',
//         height: '2.3rem',
//         textAlign: 'center',
//         color: 'white',
//         background: 'gray',
//         border: '1px solid black',
//         borderRadius: '5px',
//         columnNumber: n + 1,
//         position: 'inline-block',
//         lineHeight: '2.3rem',
//         transition: 'background .2s ease-in',
//       })
//
//     }
//
//   }


}

createBoard();
let button = document.querySelectorAll('.button');
//*******************HOVER*********************
button.forEach(but => but.addEventListener('mouseover', hover))
button.forEach(but => but.addEventListener('mouseout', hoverEnd))

function hover(e) {
  e.target.style.background = 'lightgray';
}

function hoverEnd(e) {
  e.target.style.background = 'black';
}

//---------------------KeyDown--------------------
window.addEventListener('keydown', keyDown, false);
window.addEventListener('keyup', keyUp, false);

let flagKeyDown = 1;


function keyDown(e) {
  switch (e.key) {
    case 'Enter':
      let enter = document.querySelector('.Enter');
      enter.parentElement.style.background = 'orange';
      break;
    case 'Shift':
      let shiftLeft = document.querySelector('.shiftLeft');
      let shiftRight = document.querySelector('.shiftRight');
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
      break
    case'CapsLock':

      break
  }
}

function keyUp(e) {
  switch (e.key) {
    case 'Shift':
      let shiftLeft = document.querySelector('.shiftLeft');
      let shiftRight = document.querySelector('.shiftRight');
      showButton()
      if (e.location === 1) {
        shiftLeft.parentElement.style.background = 'black';
        shiftLeft.parentElement.style.borderRadius = '5px';
      } else {
        shiftRight.parentElement.style.background = 'black';
        shiftRight.parentElement.style.borderRadius = '5px';
      }
      flagKeyDown = 1
      break;
    case 'CapsLock':

      break;
  }
}

function showButton() {
  const smallKeyEn = document.querySelectorAll('.smallEn');
  const bigKeyEn = document.querySelectorAll('.bigEn');
  const smallKeyRu = document.querySelectorAll('.smallRu');
  const bigKeyRu = document.querySelectorAll('.bigRu');
  if (document.querySelector('.smallEn').style.display === 'none') {
    smallKeyEn.forEach(key => key.style.display = 'inline-block');
    bigKeyEn.forEach(key => key.style.display = 'none');
  } else {
    smallKeyEn.forEach(key => key.style.display = 'none');
    bigKeyEn.forEach(key => key.style.display = 'inline-block');
  }
  //
  // if (document.querySelector('.smallRu').style.display === 'none') {
  //   smallKeyRu.forEach(key => key.style.display = 'inline-block');
  //   bigKeyRu.forEach(key => key.style.display = 'none');
  // } else {
  //   smallKeyRu.forEach(key => key.style.display = 'none');
  //   bigKeyRu.forEach(key => key.style.display = 'inline-block');
  // }
}

// function keyUp(e) {
//   button.forEach((but) => {
//     if (but.id === e.key) {
//       switch (but.id) {
//         case 'Enter':
//           but.style.background = 'grey'
//           break;
//         case 'Shift':
//           but.style.background = 'grey'
//           rendered(keyEnSmall)
//       }
//

//   })
// }

window.addEventListener('keypress', see);

function see(e) {
  console.log(e.keyCode)

  console.log(e.location)
}