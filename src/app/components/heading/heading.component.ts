import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const scrollThreshold = 200; // Adjust this value as needed
    this.showScrollButton = yOffset > scrollThreshold;
  }
}
