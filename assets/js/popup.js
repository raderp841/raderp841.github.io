﻿$(document).ready(function () {


    $('.popupJs').magnificPopup({
        type: 'image'
    });
    $('.gallery').click(function () {
        $('.pics').show();
    });



 
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

   
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        $('.pics').hide();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            $('.pics').hide();
        }
    }
});