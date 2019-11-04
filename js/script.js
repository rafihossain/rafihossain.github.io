/*==================================
            Preloader
====================================*/
$(window).on("load", function () {
    $('#preloader').fadeOut('slow');
    $('#status').fadeOut();
});



/*==================================
            team
====================================*/


$(document).ready(function () {
    $("#team-right").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }

    });
});



/*==================================
            progress bar
====================================*/

$(function () {
    $("#progressbar-element").waypoint(function () {
        $(function () {
            $(".progress-bar").each(function () {
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                });
            },2000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });
});

/*==================================
            responsive tabs
====================================*/


$(function () {
    $("#service-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*==================================
            protfolio
====================================*/

$(window).on('load', function () {

    var $projects = $('#isotope-container');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });


    //filter items on button click
    $('#isotope-filter').on('click', 'button', function () {

        //get filter value
        var rafi = $(this).attr('data-filter');

        //filter protfolio
        $projects.isotope({
            filter: rafi,
        });

        //active button
        $('#isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');

    });
});



/*==================================
            magnifier
====================================*/

$(function () {
    $('#portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*==================================
            testimonial
====================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});

/*==================================
            stats
====================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/*==================================
            clients
====================================*/

$(function () {
    $("#clients-details").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }

    });
});


/*==================================
           Navigation
====================================*/

//show and hide white nav
$(function () {

    $(window).scroll(function () {


        if ($(window).scrollTop() > 80) {

            //show white nav
            $("nav").addClass("white-nav-top");

            //add dark image
            $(".navbar-brand img").attr("src", "img/logo/RL1.png");

            //show back top button
            $("#back-to-top").fadeIn();

        } else {

            //hide white nav
            $("nav").removeClass("white-nav-top");

            //hide dark image
            $(".navbar-brand img").attr("src", "img/logo/RL3.png");

            //hide back top button
            $("#back-to-top").fadeOut();
        }

    });
});

/*smooth scrolling*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");


        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 60
        }, 1250, "easeInOutExpo");

    });
});


/*==================================
           Mobile Nav
====================================*/

$(function () {

    //show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%")
    });

    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%")
    });
});


/*==================================
            text animation
====================================*/

$(function () {
    
    // function([string1, string2],target id,[color1,color2])    
 consoleText(['Web Developer', 'UI / UX Designer', 'Graphics Designer'], 'home-text',['white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
    
});




/*==================================
           Animation
====================================*/


//Animate on scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#Arrow-down i").addClass("animated fadeInDown infinite");
});
























