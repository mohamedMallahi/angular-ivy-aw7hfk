import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `./header.component.html`,
  styles: [`./header.component.css`],
})
export class HeaderComponent {
  @Input() name: string;
}
