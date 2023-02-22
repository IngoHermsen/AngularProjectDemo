import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['DSC03907.jpg', 'DSC03928.jpg', 'DSC03940.jpg'];
  headlines = [
    'Impressions of a journey to Bruges',
    'See the historic architecture',
    'Get to know the culture and people of the city'
  ]
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1)
    }, 8000)
  }
}
