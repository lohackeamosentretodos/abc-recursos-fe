import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  ngAfterViewInit(){
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if ($(this).scrollTop() > 20){
        $('.navtop').addClass("my-bg-light");
      } else {
        $('.navtop').removeClass("my-bg-light");
      }
    });
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
