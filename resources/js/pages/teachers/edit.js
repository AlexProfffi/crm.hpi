
// ------------- Select2 --------------

let selectForm = $('.teachers-edit .disciplines');

selectForm.select2();

let disciplines_id = JSON.parse(selectForm.attr('data-disciplines-id'));

selectForm.val(disciplines_id).trigger('change');


// ------------- Loading and previewing an image --------------

let teacherImgPreviewE = document.querySelector('.teachers-edit img.image-preview');

if(teacherImgPreviewE) {

    let inputImgPreviewE = document.querySelector('.teachers-edit .upload-file');


    function clickInputTeacher() {

        inputImgPreviewE.click();
    }

    function changeInputTeacher(event) {

        const reader = new FileReader();


        reader.onload = e => {

            teacherImgPreviewE.src = e.target.result;
        };


        reader.readAsDataURL(event.target.files[0]);
    }


    teacherImgPreviewE.onclick = clickInputTeacher;
    inputImgPreviewE.onchange = changeInputTeacher;
}

