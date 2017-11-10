var DiagonalInfraApp = angular.module('DiagonalInfraApp', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);

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
        })
        .state('index.aboutUs', {
            url: '/aboutUs',
            templateUrl: 'app/views/aboutUs.html',
            data: { pageTitle: 'About Us' }
        })
        .state('index.imageGallery', {
            url: '/imageGallery',
            templateUrl: 'app/views/gallery/imageGallery.html',
            data: { pageTitle: 'Image Gallery' }
        })
        .state('index.videoGallery', {
            url: '/videoGallery',
            templateUrl: 'app/views/gallery/videoGallery.html',
            data: { pageTitle: 'Video Gallery' }
        })
        .state('index.bits', {
            url: '/bits',
            templateUrl: 'app/views/projects/constructions/completed/bits.html',
            data: { pageTitle: 'BITS' }
        })
        .state('index.lotusHeights', {
            url: '/lotusHeights',
            templateUrl: 'app/views/projects/constructions/on-going/lotusHeights.html',
            data: { pageTitle: 'Lotus Heights' }
        })
        .state('index.services', {
            url: '/services',
            templateUrl: 'app/views/services.html',
            data: { pageTitle: 'Services' }
        })
        .state('index.eBrouchers', {
            url: '/eBrouchers',
            templateUrl: 'app/views/eBrouchers.html',
            data: { pageTitle: 'E-Brouchers' }
        })
        .state('index.testimonials', {
            url: '/testimonials',
            templateUrl: 'app/views/testimonials.html',
            data: { pageTitle: 'Testimonials' }
        })
        .state('index.contact', {
            url: '/contact',
            templateUrl: 'app/views/contact.html',
            data: { pageTitle: 'Contact' }
        });
}]);


