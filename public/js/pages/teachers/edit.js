/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./resources/js/pages/teachers/edit.js ***!
  \*********************************************/
// ------------- Select2 --------------
$('.teachers-edit .disciplines').select2(); // ------------- Loading and previewing an image --------------

var teacherImgPreviewE = document.querySelector('.teachers-edit img.image-preview');

if (teacherImgPreviewE) {
  var clickInputTeacher = function clickInputTeacher() {
    inputImgPreviewE.click();
  };

  var changeInputTeacher = function changeInputTeacher(event) {
    var reader = new FileReader();

    reader.onload = function (e) {
      teacherImgPreviewE.src = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  var inputImgPreviewE = document.querySelector('.teachers-edit .upload-file');
  teacherImgPreviewE.onclick = clickInputTeacher;
  inputImgPreviewE.onchange = changeInputTeacher;
}
/******/ })()
;
//# sourceMappingURL=edit.js.map