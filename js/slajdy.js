"use strict";

var slider = $("#slider");
var slideshow = $(".slide-show");
var slideCount = $(".slide-show").length;
var slideWidth = function () {
    100 / slideCount;
}
