/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./resources/js/pages/teachers/create.js ***!
  \***********************************************/
// ------------- Select2 --------------
$('.teachers-create .disciplines').select2(); // ------------- Loading and previewing an image --------------

var teacherImgPreviewC = document.querySelector('.teachers-create img.image-preview');

if (teacherImgPreviewC) {
  var clickInputTeacher = function clickInputTeacher() {
    inputImgPreviewC.click();
  };

  var changeInputTeacher = function changeInputTeacher(event) {
    var reader = new FileReader();

    reader.onload = function (e) {
      borderImgPreviewC.style.display = 'none';
      teacherImgPreviewC.style.display = 'block';
      teacherImgPreviewC.src = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  var borderImgPreviewC = document.querySelector('.teachers-create div.image-preview');
  var inputImgPreviewC = document.querySelector('.teachers-create .upload-file');
  teacherImgPreviewC.style.display = 'none';
  teacherImgPreviewC.onclick = clickInputTeacher;
  borderImgPreviewC.onclick = clickInputTeacher;
  inputImgPreviewC.onchange = changeInputTeacher;
}
/******/ })()
;
//# sourceMappingURL=create.js.map