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
    code: string;
  }[];
  copiedFirst: boolean = false;
  copiedLast: boolean = false;
  copiedCode: string | null = null;

  constructor(private clipboard: Clipboard) {}

  copyData(data: string, type: string, code: string) {
    this.clipboard.copy(data);
    this.copiedCode = code;
    if (type === 'short_link' && code === this.copiedCode) {
      this.copiedFirst = !this.copiedFirst;
      setTimeout(() => {
        this.copiedFirst = false;
      }, 2000);
    }
    if (type === 'short_link2' && code === this.copiedCode) {
      this.copiedLast = !this.copiedLast;
      setTimeout(() => {
        this.copiedLast = false;
      }, 2000);
    }
    console.log(data);
  }
}
