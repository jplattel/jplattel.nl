/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: "justify"
  };
  $(".article-gallery").justifiedGallery(options);
}

$(document).ready(function() {
  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function() {
    console.log("clicked")
    $("#header > #nav > ul").toggleClass("responsive");
  });

  // // var menu = $("#menu");
  // // var nav = $("#menu > #nav");
  // // var menuIcon = $("#menu-icon, #menu-icon-tablet");

  // /**
  //  * Display the menu on hi-res laptops and desktops.
  //  */
  // if ($(document).width() >= 1440) {
  //   menu.css("visibility", "visible");
  //   menuIcon.addClass("active");
  // }

  // /**
  //  * Display the menu if the menu icon is clicked.
  //  */
  // menuIcon.click(function() {
  //   if (menu.css("visibility") === "hidden") {
  //     menu.css("visibility", "visible");
  //     menuIcon.addClass("active");
  //   } else {
  //     menu.css("visibility", "hidden");
  //     menuIcon.removeClass("active");
  //   }
  //   return false;
  // });
});
