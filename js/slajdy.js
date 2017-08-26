"use strict";

$(function () {
    //zmienne
    var slider = $("#slider");
    var slideShow = $(".slide-show");
    var slideCount = slideShow.children().length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;


    //funkcja animujące, której parametrem jest nwoy index slidu
    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        var slideCaption = $(".slider-caption").eq(newSlideIndex);
        slideCaption.hide();

        var marginLeft = (newSlideIndex * (-100)) + "%";

        //wywałanie animacji na elemencie slideShow, która przesunie go
        slideShow.animate({
                "margin-left": marginLeft
            },
            800,
            function () {
                slideIndex = newSlideIndex;
                slideCaption.fadeIn("slow")
            }
        );
    }

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
