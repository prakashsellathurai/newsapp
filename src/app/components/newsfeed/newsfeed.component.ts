import { Component, OnInit } from '@angular/core';
import { NewsapiService, QueryResponse, QueryResponseArticlesArray } from '../../services/newsapi.service';

const randomresourceParams = `technology`;
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
public Article: QueryResponseArticlesArray;
  public Articles: QueryResponse;

  constructor(private Newsapiservice: NewsapiService) {
    this.Getfeed();
   }

  ngOnInit() {
  }

  Getfeed() {
    this.Newsapiservice.getrandomresourcewithParams(randomresourceParams, 'en' ).subscribe(res => this.handleResponse(res));
  }
  handleResponse(res) {
    this.Articles = res.articles ;
   console.log(res);
    return this.Articles;
  }
}
