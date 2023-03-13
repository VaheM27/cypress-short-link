import { Component } from '@angular/core';
import { UrlShortenerService } from '../services/url-shortener.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shorten-form',
  templateUrl: './shorten-form.component.html',
  styleUrls: ['./shorten-form.component.scss'],
})
export class ShortenFormComponent {
  url: string;
  shortenedLinks: { short_link: string; short_link2: string; code: string }[] =
    [];
  constructor(private urlShortenerService: UrlShortenerService) {}

  @Output() dataEvent = new EventEmitter<any>();

  onSubmit() {
    if (!this.url) {
      return;
    }
    this.urlShortenerService.shorten(this.url).subscribe(
      (response: any) => {
        this.shortenedLinks.push(response.result);
        this.sendData(this.shortenedLinks);
      },
      (error: any) => {
        console.error(error);
      }
    );

    this.url = '';
  }

  sendData(data: any) {
    this.dataEvent.emit(data);
  }
}
