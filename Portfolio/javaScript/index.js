var $page = $(".page");

$(".menu_toggle").on("click", function () {
  $page.toggleClass("real");
});

$(".content").on("click", function () {
  $page.removeClass("real");
});
