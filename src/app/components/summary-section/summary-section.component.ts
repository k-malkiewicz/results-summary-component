import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SummarySectionComponent implements OnInit {
  categories: Category[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.fetchCategories().subscribe(res => {
      this.categories = res;
    });
  }
}
