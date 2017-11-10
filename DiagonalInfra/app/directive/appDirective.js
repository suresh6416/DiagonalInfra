(function() {
    'use strict';

    angular
        .module('app')
        .directive('appDirective', appDirective);

    appDirective.$inject = ['$window'];
    
    function appDirective ($window) {
        // Usage:
        //     <appDirective></appDirective>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            if ($('.video-gallery').length) {
                var slider = new MasterSlider();

                slider.setup('video-gallery', {
                    width: 1000,
                    height: 532,
                    space: 5,
                    shuffle: true,
                    loop: true,
                    view: 'parallaxMask'
                });

                slider.control('arrows');
                slider.control('thumblist', { autohide: false, dir: 'h' });
            }
        }
    }

})();