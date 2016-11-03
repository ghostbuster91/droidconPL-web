import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
var $ = require('jquery');

if (process.env.ENV === 'production') {
  enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

$(document).ready(function() {

    //timer function
    $(function(){
        var d = new Date("December 8, 2016 08:00:00");
        $('.clock-builder-output').countdown(d, function(event: any) {
            $("#days").html(event.strftime('%D'));
            $("#hours").html(event.strftime('%H'));
            $("#minutes").html(event.strftime('%M'));
            $("#seconds").html(event.strftime('%S'));
        });
    });

    $("body").on('click', 'a.scrollable', function(e: any) {
      // target element id
      var id = window.location.hash;
      if ( id.indexOf("#/") >= 0 ) {
        id = id.slice(2);
      };

      // target element
      var $id = $(id);
      if ($id.length === 0) {
        return;
      }

      // wyłączenie normalnej hashowej nawigacji
      // e.preventDefault();

      // top relatywnie do dokumentu
      var pos = $(id).offset().top - 100;

      // animacja
      $('body, html').animate({scrollTop: pos});
    });

});
