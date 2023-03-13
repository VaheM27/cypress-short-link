import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shortenedLinks: any;
  top: any;
  left: any;
  expand = false;

  onDataReceived(data: string) {
    this.shortenedLinks = data;
  }

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = $event.pageY - 10 + 'px';
    this.left = $event.pageX - 10 + 'px';
  }
}
