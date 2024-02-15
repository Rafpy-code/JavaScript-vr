import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  ngOnInit() {
    $("#mi-logo").click((e: { preventDefault: () => void; 
    }) => {
      e.preventDefault();
      $("nav").css("background", "black")
              .css("color", "withe");
    });

    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 400
    });
  }
}
