import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shortenedLinks: any;

  onDataReceived(data: string) {
    this.shortenedLinks = data;
  }
}
