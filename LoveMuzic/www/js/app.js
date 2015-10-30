// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    //  admob
    var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) {
        admobid = { // for Android
            banner: 'ca-app-pub-6869992474017983/9375997553',
            interstitial: 'ca-app-pub-6869992474017983/1657046752'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
            banner: 'ca-app-pub-6869992474017983/4806197152',
            interstitial: 'ca-app-pub-6869992474017983/7563979554'
        };
    } else {
        admobid = { // for Windows Phone
            banner: 'ca-app-pub-6869992474017983/8878394753',
            interstitial: 'ca-app-pub-6869992474017983/1355127956'
        };
    }

    if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        document.addEventListener('deviceready', initApp, false);
    } else {
        initApp();
    }

    function initApp() {
        if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

        AdMob.createBanner( {
            adId: admobid.banner,
            isTesting: true,
            overlap: false,
            offsetTopBar: false,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            bgColor: 'black'
        } );

        AdMob.prepareInterstitial({
           // adId: admobid.interstitial,
           // autoShow: true
        });
    }
    // admob end
  });
})
