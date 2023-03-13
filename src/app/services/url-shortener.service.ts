import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ShortLinkResponse {
  ok: boolean;
  result: {
    short_link: string;
    short_link2: string;
  };
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private readonly API_SHORTEN = 'https://api.shrtco.de/v2/';

  constructor(private http: HttpClient) {}

  shorten(url: string) {
    return this.http.get<ShortLinkResponse>(
      `${this.API_SHORTEN}shorten?url=${url}`
    );
  }
}
