import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  imgSrc: string = '/images/خلفيات-ريال-مدريد-6.jpg';

  hideImage(){
    if (this.imgSrc) {
      this.imgSrc = '';
    }else {
      this.imgSrc = '/images/خلفيات-ريال-مدريد-6.jpg';
    }
  }

}
