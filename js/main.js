'use strict';
(function () {
    var accordionJQuery = function () {
        $('#accordion-jquery > h3').click(function (event) {
            event.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    };
    accordionJQuery();
})();