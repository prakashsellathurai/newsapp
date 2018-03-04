import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Article {
  author: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface Articles {
  source: string;
  articles: Array<Article>;
}
@Injectable()
export class NewsfeedService {
  baseUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=b4c33a04d71c46359b63748d73b2f386';
  responseJsonObject;
  constructor(private http: HttpClient) {

  }
  getResponse() {
    return this.http.get<Articles>(this.baseUrl).map(res =>  res ); // .subscribe(res => this.handleResponse(res));
  }
  /*handleResponse(res) {
    this.responseJsonObject = res.json() ;
    return this.GetNewsFeed();
  }*/
 GetNewsFeed() {
  return this.responseJsonObject ;
 }


}
