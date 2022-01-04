/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/includes/date-range-picker.js":
/*!****************************************************!*\
  !*** ./resources/js/includes/date-range-picker.js ***!
  \****************************************************/
/***/ (() => {

$('input[name="start_date"], input[name="end_date"]').daterangepicker({
  singleDatePicker: true,
  timePicker: true,
  timePicker24Hour: true,
  timePickerSeconds: true,
  locale: {
    format: 'YYYY-MM-DD HH:mm:ss'
  }
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./resources/js/pages/disciplines/edit.js ***!
  \************************************************/
// ------ Includes -------
__webpack_require__(/*! resources/js/includes/date-range-picker */ "./resources/js/includes/date-range-picker.js");
})();

/******/ })()
;
//# sourceMappingURL=edit.js.map