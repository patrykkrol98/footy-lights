import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[] = [];
  currentCategory = "sport";
  currentCountry = "gb";
  countries = [
    { value: 'gb', viewValue: 'Great Britain' },
    { value: 'pl', viewValue: 'Poland' },
    { value: 'us', viewValue: 'USA' },
  ];

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  isSelected(selection: string){

    return (this.currentCountry == selection)
  }

  getNews() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => { this.newsList = news });
  }

  onChangeCountry(country: string) {
    this.currentCountry = country;
    this.getNews()
  }

  checkUrl(url: string){
    return url !== null ? url : '/assets/image.jpeg';
  }
}
