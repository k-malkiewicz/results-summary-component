import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryCardComponent {
  @Input() imgSrc?: string;
  @Input() categoryName?: string;
  @Input() categoryScore?: number;
}
