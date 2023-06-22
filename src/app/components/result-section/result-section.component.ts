import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultSectionComponent {
  title: string = "Your Result";
  @Input() overallScore: number = 0;
}
