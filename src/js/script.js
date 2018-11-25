$(document).ready(function(){var e=$(".header__toggle"),s=$(".header__close"),o=$(".header .outside"),n=$(".header-modal-menu__item"),t=function(){$(".header").removeClass("header--opened"),$("html").removeClass("html--menu-opened"),$("body").removeClass("body--menu-opened")};e.click(function(){$(".header").addClass("header--opened"),$("html").addClass("html--menu-opened"),$("body").addClass("body--menu-opened")}),s.click(t),o.click(t),n.click(function(){var e=$(this).attr("href"),s=$(e).offset().top;return t(),jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:s},800),!1})});var tabList=["Ногтевая эстетика","Волосы","Уходовые ритуалы и лечение волос","Макияж","Паралельное выполнение сервисов","Косметология","Лезарная эпиляция"];$(".services .tab_item").not(":first").hide(),$(".services__wrapper .tab").click(function(){var e=tabList[$(this).index()];$(".tabs__icon").toggleClass("tabs__icon--opened"),$(".services__wrapper .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab"),$(".services .tab_item").removeClass("tab_item--active").hide().eq($(this).index()).fadeIn().addClass("tab_item--active"),$(".services .tabs__current").html(e),$(".services .tabs__list").toggleClass("tabs__list--opened")}).eq(0).addClass("active-tab"),$(".services .tabs__current").click(function(){$(".tabs__icon").toggleClass("tabs__icon--opened"),$(".services .tabs__list").toggleClass("tabs__list--opened")}),$(document).ready(function(){var e=$(".services .owl-carousel"),s=$(".services .owl-carousel--1"),o=$(".services .owl-carousel--2"),n=$(".services .owl-carousel--3"),t=$(".services .owl-carousel--4"),a=$(".services .owl-carousel--6"),b=$(".services .owl-carousel--7");function i(e,s){var o=e.item.count,n=e.item.index;$(`.services .owl-carousel--${s} + .numbers--${s} .numbers__current`).html(`0${n+1}`),$(`.services .owl-carousel--${s} + .numbers--${s} .numbers__count`).html(`0${o}`)}s.owlCarousel({onInitialized:function(e,s){i(e,1)},loop:!0,responsiveClass:!0,responsive:{320:{items:1,nav:!0}}}),o.owlCarousel({onInitialized:function(e,s){i(e,2)},loop:!0,responsiveClass:!0,responsive:{320:{items:1,nav:!0}}}),n.owlCarousel({onInitialized:function(e,s){i(e,2)},loop:!0,responsiveClass:!0,responsive:{320:{items:1,nav:!0}}}),t.owlCarousel({onInitialized:function(e,s){i(e,2)},loop:!0,responsiveClass:!0,responsive:{320:{items:1,nav:!0}}}),a.owlCarousel({onInitialized:function(e,s){i(e,2)},loop:!0,responsiveClass:!0,responsive:{320:{items:1,nav:!0}}}),b.owlCarousel({onInitialized:function(e,s){i(e,2)},loop:!0,responsiveClass:!0,responsive:{320:{items:1,nav:!0}}}),e.on("changed.owl.carousel",function(e){var s=e.item.count,o=e.item.index;$(".services .owl-carousel + .numbers .numbers__current").html(`0${o+1}`),$(".services .owl-carousel + .numbers .numbers__count").html(`0${s}`)})}),$(document).ready(function(){var e=["Горностаева","Мазина","Авякян","Дьяков","Кудлай","Трушенко","Ковальчук","",""],s="",o=$(".team .owl-carousel");function n(o){var n=o.item.count,t=o.item.index;$(".team .owl-carousel + .numbers .numbers__current").html(`0${t+1}`),$(".team .owl-carousel + .numbers .numbers__count").html(`0${n}`),s=e[t]}o.owlCarousel({loop:!1,responsiveClass:!0,onInitialized:n,responsive:{320:{items:1,nav:!0}}}),o.on("changed.owl.carousel",n);$("#form");$("#form__button").click(function(e){e.preventDefault();var o=`http://innovations.kh.ua/french/order.php?name=${document.getElementById("form_name").value}&tel=${document.getElementById("form_phone").value}&text=${s}`;$.ajax({url:o,type:"POST"}).done(function(e){console.log(e)}).fail(function(e,s){console.log("Request failed: "+s)})})}),$(document).ready(function(){var e=$(".owl-carousel--testimonials");function s(e){var s=e.item.count,o=e.item.index;$(".owl-carousel--testimonials + .numbers--testimonials .numbers__current").html(`0${o+1}`),$(".owl-carousel--testimonials + .numbers--testimonials .numbers__count").html(`0${s}`)}e.owlCarousel({onInitialized:s,loop:!1,responsiveClass:!0,responsive:{320:{items:1,nav:!0}},URLhashListener:!0,autoplay:!1,startPosition:"URLHash"}),e.on("changed.owl.carousel",s)});

$(document).ready(function() {
    function addHideClass() {
        $('.form-dialog').addClass('form-dialog--hide');
    }
    $('.poppup').click(function() {
        $('.form-dialog').removeClass('form-dialog--hide');
    })

    $('.form-dialog__underlay').click(addHideClass)

    $("#poppup-form");
    $("#poppup-form__button").click(function(e) {
        e.preventDefault();
        var o = `http://innovations.kh.ua/french/order.php?name=${document.getElementById("poppup-form_name").value}&tel=${document.getElementById("poppup-form_phone").value}&text=${document.getElementById("poppup-form_text").value}`;
        $.ajax({
            url: o,
            type: "POST"
        }).done(function(e) {
            console.log(e)
        }).fail(function(e, s) {
            console.log("Request failed: " + s)
        })
    })
})