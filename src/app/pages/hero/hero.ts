import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlShortenerService } from '../../url-shortener-service';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone: true
})
export class Hero {
  longUrl: string = '';
  isLoading = false;
  isCopied = false;
  ShortUrlResponse: any = {
    shortUrl: '',
    message: '',
  };

  constructor(private _urlShortenerService: UrlShortenerService) { }

  onShortenUrl() {
    if (!this.longUrl.trim()) {
      return;
    }
    this.isLoading = true;
    this._urlShortenerService.CreateShortUrl(this.longUrl).subscribe({
      next: (response: any) => {
        console.log('Shortened URL:', response);
        this.ShortUrlResponse.shortUrl = response.value.ShortUrl;
        this.ShortUrlResponse.message = response.value.Message;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error shortening URL:', error);
        this.isLoading = false;
      }
    }
    );

  }

  copyShortUrl() {
    if (this.ShortUrlResponse.shortUrl) {
      navigator.clipboard.writeText(this.ShortUrlResponse.shortUrl).then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
      });
    }
  }

}
