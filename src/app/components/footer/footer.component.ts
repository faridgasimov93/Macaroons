import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  phoneNumber: string = '+375 (29) 368-98-68';
  instagramLink: string = 'https://www.instagram.com/yourprofile';

}
