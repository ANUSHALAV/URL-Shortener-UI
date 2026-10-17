import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlShortenerService } from '../../url-shortener-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [FormsModule,RouterLink],
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
    success : null,
  };

  constructor(private _urlShortenerService: UrlShortenerService) { }

  onShortenUrl() {
    if (!this.longUrl.trim()) {
      return;
    }
    this.isLoading = true;
    this._urlShortenerService.CreateShortUrl(this.longUrl).subscribe({
      next: (response: any) => {
        this.ShortUrlResponse.shortUrl = response.value.shortUrl;
        this.ShortUrlResponse.message = response.value.message;
        this.ShortUrlResponse.success = response.value.success;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.ShortUrlResponse.message = error;
        this.ShortUrlResponse.success = false;
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
