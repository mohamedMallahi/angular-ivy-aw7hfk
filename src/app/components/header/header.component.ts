import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.css`],
})
export class HeaderComponent {
  @Input() name: string;
}
