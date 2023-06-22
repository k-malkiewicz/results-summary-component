import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = "../assets/data/data.json";

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.URL);
  }
}
