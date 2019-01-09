import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'scroll';

  constructor() { }

  ngOnInit() {

      // JQuery Function Integrations
      $(document).ready(function(){
        // $("html, body").animate({ scrollTop: 0 }, "slow");

        $('div.hidden').fadeIn(1500).removeClass('hidden');

        $("#info_head_1").hide();
        $(".icons").hide();

        //--------->> Picture Functions
        $('.arrow1').click(function(){
          $("html, body").animate({ scrollTop: 910 }, "slower");

          $("#info_head_1").fadeIn(1500, function(){});
        });

        //--------->> About Section Functions
        $('.arrow2').click(function(){
          var about = $(document.getElementById("about"));

          $("html, body").animate({ scrollTop: 1990 }, "slower");

          about.animate({fontSize: '50px'}, 1000);

          $(".icons").fadeIn(3000, function(){});
        });

        $('.arrow3').click(function(){
          $("html, body").animate({ scrollTop: 2905 }, "slower");
          $('.arrow3').fadeOut("slow");
        });

      });

  }

}
