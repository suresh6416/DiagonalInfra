var DiagonalInfraApp = angular.module('DiagonalInfraApp', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);

DiagonalInfraApp.controller('appController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $scope.mainSlider = function () {
        //Main Slider
        if ($('.main-slider .tp-banner').length) {
            jQuery('.main-slider .tp-banner').show().revolution({
                dottedOverlay: "none",
                delay: 10000,
                startwidth: 1200,
                startheight: 750,
                hideThumbs: 200,

                thumbWidth: 80,
                thumbHeight: 50,
                thumbAmount: 5,

                navigationType: "none",
                navigationArrows: "0",
                navigationStyle: "preview4",

                touchenabled: "on",
                onHoverStop: "off",

                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,

                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

                keyboardNavigation: "off",

                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,

                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "bottom",
                soloArrowLeftHOffset: 0,
                soloArrowLeftVOffset: 0,

                soloArrowRightHalign: "right",
                soloArrowRightValign: "bottom",
                soloArrowRightHOffset: 0,
                soloArrowRightVOffset: 0,

                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",

                spinner: "spinner4",

                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,

                shuffle: "off",

                autoHeight: "off",
                forceFullWidth: "on",

                hideThumbsOnMobile: "on",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "on",
                hideArrowsOnMobile: "on",
                hideThumbsUnderResolution: 0,

                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                videoJsPath: "",
                fullScreenOffsetContainer: ""
            });


        }
    }
}]);

DiagonalInfraApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/index/home");
    var WEB_APP_NAME = "DiagonalInfraApp";

    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'app/views/layout/layout.html'
        })
        .state('index.home', {
            url: '/home',
            templateUrl: 'app/views/home.html',
            data: { pageTitle: 'Home' }
        });
}]);

