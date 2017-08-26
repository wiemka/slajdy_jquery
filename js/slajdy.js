"use strict";

$(function () {
    //zmienne
    var slider = $("#slider");
    var slideShow = $(".slide-show");
    var slideCount = slideShow.children().length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    //szerokość kontenera slideshow
    slideShow.css("width", slideCount * 100 + "%");
    //iteracja po wszystkich slajdach i nadanie im marginesów i szerokości
    slideShow.find(".single-slide").each(function (index) {
        $(this).css({
            "width": slideWidth + "%",
            "margin-left": index * slideWidth + "%"
        })
    })

    //przycisk poprzedni - wywołanie funkcji slide()
    $(".prev-slide").click(function () {
        slide(slideIndex - 1);
    })
    //przycisk następny - wywołanie funkcji slide()
    $(".next-slide").click(function () {
        slide(slideIndex + 1);
    })
})
