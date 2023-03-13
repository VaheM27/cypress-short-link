import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-shortened-links',
  templateUrl: './shortened-links.component.html',
  styleUrls: ['./shortened-links.component.scss'],
})
export class ShortenedLinksComponent {
  @Input() shortenedLinks: {
    short_link: string;
    short_link2: string;
  }[];
  constructor(private clipboard: Clipboard) {}

  copyData(data: string) {
    this.clipboard.copy(data);
  }
}
