
$(".range").slider({
    min: 0,
    value: 50,
    max: 100,
    orientation: "horizontal",
    range: "min",
    animate: true,
  slide: handleSliderChange,
  change: handleSliderChange
});
$('.ui-slider-handle').html("<div class='line'></div><div class='line2'></div>");
function handleSliderChange(event, slider) {
    var slidernewval = slider.value-50;
    //$(".line").text(slidernewval);
  $(".line").css({ 'transform': 'rotate(' + slidernewval + 'deg)'});
  $(".line2").css({ 'transform': 'rotate(' + (-slidernewval) + 'deg)'});
}
$(".range").slider("value",90);