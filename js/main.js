jQuery(document).ready(function ($) {
  //
  $("header").css({ height: $(window).height() });
  $(window).on("resize", function () {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  // NAV BAR
  $(document).on("scroll", function () {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < h * 0.2) {
        nav.children().removeClass("fadeIn");
        nav.fadeIn("fast");
      } else {
        nav.children().addClass("fadeIn").fadeIn("fast");
        nav.fadeIn("fast");
      }
    }

    // if (loc > 100 && loc < 620) {
    //   $("#nav").fadeOut(100, function (e) {
    //     // $(this).addClass("fadeOut");
    //   });
    // } else if (loc >= 620) {
    //   $("#nav").fadeIn(100, function (e) {
    //     $(this).addClass("fadeIn");
    //     $(this).removeClass("fadeOut");
    //   });
    // } else if (loc < 620) {
    //   $("#nav").fadeIn(100, function () {
    //     $(this).removeClass("fadeIn");
    //   });
    // }
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function (event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%",
  });

  // SMOOTH SCROLLING ================

  $(".smoothcontrol").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      let hash = this.hash;
      let current = $(this).parent();
      let prev = $(".current");
      prev.removeClass("current");
      $("html, body").animate(
        { scrollTop: $(hash).offset().top },
        800,
        function () {
          current.addClass("current");
        }
      );
    }
  });
});
