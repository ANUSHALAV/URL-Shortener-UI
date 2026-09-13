import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  imports: [],
  templateUrl: './pagenotfound.html',
  styleUrl: './pagenotfound.scss',
  standalone: true
})
export class Pagenotfound {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }
}
