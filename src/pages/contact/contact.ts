import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  @ViewChild('mySlider') slider: Slides;
  
  constructor(public navCtrl: NavController) {
  }
  
    ionViewWillEnter() {
     console.log("entering Contact....");
  }
  
  onSlideChanged(e) {
    let currentIndex = this.slider.getActiveIndex();
    console.log("you are on slide", (currentIndex+1));
  }

}
