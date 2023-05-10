/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 210:
/***/ (() => {

var contact_me = document.querySelector('.contact_me');
var ul = contact_me.querySelector('ul');
var bs = ul.querySelectorAll('b');

var copyclipboard = function copyclipboard(e, b) {
  console.log(e);
  var screenX = e.offsetX,
      screenY = e.offsetY;
  console.log(e);
  navigator.clipboard.writeText(b.textContent);
  b.appendChild(temporalCopiedElement(screenX, screenY));
};

function temporalCopiedElement(positionx, positiony) {
  var div = document.createElement('div');
  div.textContent = 'Copied';
  div.classList.add('clipboard_copied'); // div.style.top = positiony+'px'
  // div.style.left = positionx+'px'

  div.onanimationend = function () {
    this.remove();
  };

  return div;
}

bs.forEach(function (b) {
  // console.log(b)
  b.onclick = function (e) {
    copyclipboard(e, this);
  };
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js_components_anim/intersectionob.js
// const cards_knowledge = document.querySelector('.knowlege').childNodes
var knowledge = document.querySelector('.knowlege');
var cards_projects = document.querySelector('.projects_v2').childNodes;
var about_section = document.querySelector('#about');
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // entry.target.classList.remove('io_not_observ')
      entry.target.classList.add('iobserver');
    } // else {
    //     entry.target.classList.remove('iobserver')
    //     entry.target.classList.add('io_not_observ')
    // }

  });
}, {
  // rootMargin: '0px',
  threshold: .3
});
var observerRight = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // entry.target.classList.remove('io_not_observ')
      entry.target.classList.add('iobserver_right');
    }
  });
}, {
  // rootMargin: '0px',
  threshold: .3
});
function io_cards_anim() {
  // cards_knowledge.forEach(card=>{
  //     if( card.className?.includes('knowlege_card'))
  //         observer.observe(card)
  // })
  observerRight.observe(knowledge);
  cards_projects.forEach(function (card) {
    var _card$className;

    if ((_card$className = card.className) !== null && _card$className !== void 0 && _card$className.includes('one_project_v2')) observer.observe(card);
  });
  observer.observe(about_section);
}
// EXTERNAL MODULE: ./src/helpers/copy_clipboard.js
var copy_clipboard = __webpack_require__(210);
;// CONCATENATED MODULE: ./src/index.js







 // animation

 // import RenderKnowlege from './pages/RenderKnowlege'
// helper functions

 // alert("This Project is in development")

var app = document.querySelector('#app'); // Animation

io_cards_anim(); // Routing
// const knowlege_node_list = document.querySelectorAll('.knowlege_card')
// let mousePointer
// let currentColor
// for (const known of knowlege_node_list) {
//     known.addEventListener('click', function (e) {
//         let hash_url
//         for (let node of this.childNodes) {
//             if (node.id = 'name_card') {
//                 // hash_url = this.childNodes[1].textContent
//                 hash_url = this.querySelector('h3').textContent
//             } else {
//                 hash_url = ''
//             }
//         }
//         window.location.hash = hash_url
//         currentColor = window.getComputedStyle(this, null).getPropertyValue('background-color')
//         mousePointer = e
//     })
// }

window.onhashchange = function (e) {
  e.preventDefault();
  var name = window.location.hash; // const data = {
  //     mousePointer,
  //     currentColor
  // }

  name != '#' && name != '#_' && name != '#home' && name != '#about' && name != '#projects' && name != '#knowledge'; // && RenderKnowlege(app, name, data)
}; // window.onload = (e) => {
//     // window.location.hash = ''
// }
})();

/******/ })()
;