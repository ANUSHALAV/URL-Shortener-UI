import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  longUrl = '';

  isLoading = false;

  shortenUrl(): void {

    if (!this.longUrl.trim()) {
      return;
    }

    console.log('URL:', this.longUrl);

    // Later:
    // this.shortLinkService.shortenUrl(this.longUrl)

  }

}
