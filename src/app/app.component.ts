import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  overallScore: number = 0;

  constructor(private data: DataService){}

  ngOnInit(): void {
    this.data.fetchCategories().subscribe(res => {
      res.forEach(el => {
        this.overallScore += el.score;
      });
      this.overallScore = Math.floor(this.overallScore / 4);
    });
  }
}
