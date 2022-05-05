"use strict"
let keyboardValue = [
  [
    '<sup>~</sup> `',
    '<sup>!</sup> 1',
    '<sup>@</sup> 2',
    '<sup>#</sup> 3',
    '<sup>$</sup> 4',
    '<sup>%</sup> 5',
    '<sup>^</sup> 6',
    '<sup>&</sup> 7',
    '<sup>*</sup> 8',
    '<sup>(</sup> 9',
    '<sup>)</sup> 0',
    '<sup>_</sup> -',
    '<sup>+</sup> =',
    'Backspace'
  ],
  [
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '[',
    ']',
    '<sup>|</sup> \\',
    'DEL'
  ],
  [
    'CapsLock',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    ';',
    "'",
    'ENTER'
  ],
  [
    'Shift',
    '/',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    ',',
    '.',
    '/',
    '&#708;',
    'Shift'
  ],
  [
    'Ctrl',
    'Win',
    'Alt',
    'space',
    'Alt',
    'Ctrl',
    '<',
    '\t\n' +
    '&#709;',
    '>'
  ]

]
let body = document.querySelector('body');
body.style.display = 'grid';
body.style.height = '100%';
body.style.width = '100%';
body.style.margin = '0';
body.style.position = 'absolute';
body.style.justifyContent = 'center';
body.style.alignContent = 'center';

class Element {
  constructor(selector) {
    this.selector = document.createElement(selector);
  }
}

class Key extends Element {
  constructor(options) {
    super(options.selector);
    const parent = document.querySelector(options.parent);
    parent.prepend(this.selector);
    this.selector.innerHTML = options.value;
    this.selector.className = options.className;
    this.selector.id = options.id;
    this.selector.style.padding = options.padding;
    this.selector.style.position = options.position;
    this.selector.style.color = options.color;
    this.selector.style.background = options.background;
    this.selector.style.width = options.width;
    this.selector.style.height = options.height;
    this.selector.style.display = options.display;
    this.selector.style.margin = options.margin;
    this.selector.style.textAlign = options.textAlign;
    this.selector.style.border = options.border;
    this.selector.style.borderRadius = options.borderRadius;
    this.selector.style.gridAutoColumns = options.columns;
    this.selector.style.gridColumn = options.columnNumber;
    this.selector.style.justifyContent = options.justifyContent;
    this.selector.style.alignItems = options.alignItems;
    this.selector.style.lineHeight = options.lineHeight;
    this.selector.style.gridColumnGap = options.gridColumnGap;


  }
}

// const wrapper = new Key({
//   className:'wrapper',
//   selector:'div',
//   parent:'body',
//   width:'75%',
//   display:'grid',
//   margin:'auto',
//   columns:'auto',
// })

for (let i = keyboardValue.length - 1; i >= 0; i--) {
  const wrapper = new Key({
    className: 'wrapper' + i,
    selector: 'div',
    parent: 'body',
    display: 'grid',
    margin: '0',
    columns: 'auto',
    value: '',
    justifyContent: 'center',
    gridColumnGap: '0.5rem',
  })
  for (let n = keyboardValue[i].length - 1; n >= 0; n--) {
    const nav = new Key({
      selector: 'span',
      parent: '.wrapper' + i,
      value: keyboardValue[i][n],
      margin: '0.2em 0',
      id: keyboardValue[i][n],
      className: 'button',
      width: '100%',
      height: '2.3rem',
      textAlign: 'center',
      color: 'white',
      background: 'gray',
      border: '1px solid black',
      borderRadius: '5px',
      columnNumber: n + 1,
      position: 'inline-block',
      lineHeight: '2.3rem',
    })
  }
}
let row1 = document.querySelector('.wrapper0');
row1.style.gridTemplateColumns = 'repeat(13, 1fr) 2.3fr';

let row2 = document.querySelector('.wrapper1');
row2.style.gridTemplateColumns = '1.1fr repeat(14, 1fr)';

let row3 = document.querySelector('.wrapper2');
row3.style.gridTemplateColumns = '2fr repeat(11, 1fr) 2.2fr';

let row4 = document.querySelector('.wrapper3');
row4.style.gridTemplateColumns = '2fr repeat(13, 1fr)';

let row5 = document.querySelector('.wrapper4');
row5.style.gridTemplateColumns = '1.5fr repeat(2, 1fr) 7fr 1fr 1.5fr repeat(3, 1fr)';

document.querySelectorAll('sup').forEach(sup => sup.style.background = 'inherit')

let button = document.querySelectorAll('.button');
button.forEach(but => but.addEventListener('mouseover', hover))
button.forEach(but => but.addEventListener('mouseout', hoverEnd))

function hover(e) {
  if (e.target.className === 'button') {
    e.target.style.transition = 'background .1s ease-in';
    e.target.style.background = 'pink';
  }
  if (e.target.parentElement.className === 'button') {
    e.target.parentElement.style.transition = 'background .1s ease-in';
    e.target.parentElement.style.background = 'pink';
  }
}

function hoverEnd(e) {
  if (e.target.className === 'button') {
    e.target.style.background = 'gray';
  }
  if (e.target.parentElement.className === 'button') {
    e.target.parentElement.style.background = 'gray'
  }
}

window.addEventListener('keydown', keyDown)

function keyDown(e){
  console.log(e.key)
  console.log(e.key === '1')

}