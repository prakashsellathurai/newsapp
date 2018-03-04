import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY  = 'b4c33a04d71c46359b63748d73b2f386';
const GET_RANDOM_HEADLINES_REQUEST_URL = `${BASE_URL}/top-headlines?apikey=${API_KEY}`;
const GET_QUERY_URL = `${BASE_URL}/everything?apikey=${API_KEY}`;
export interface RandomResponseArticlesArray {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
export interface RandomResponse {
status: string;
sources: Array<RandomResponseArticlesArray>;
}

export interface QueryResponseArticlesArray {
  source: object;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface QueryResponse {
  status: string;
  totalResults: number;
  articles: Array<QueryResponseArticlesArray>;
}
@Injectable()
export class NewsapiService {

  constructor(private http: Http) { }
getrandomresource() {
  return this.http.get(GET_RANDOM_HEADLINES_REQUEST_URL + `&language=en`).map(res => res);
}
getrandomresourcewithParams (category?: string, language ?: string  , country ?: string) {
  const assignCountry = (country) ? `&country=${country}` : ``;
  return this.http.get(GET_RANDOM_HEADLINES_REQUEST_URL + `&category=${category}&language=${language}` + assignCountry).map(res => res);
}
QueryTopic(q, sources ?: any, domain ?: any , from?: any, to ?: any, language ?: any , sortBy?: any, pageSize?: any, page?: any) {
  const assignSources = (sources) ? `&sources=${sources}` : `` ;
  const assignDomain = (domain) ? `&domain=${domain}` : ``;
  const assignFromAndTo  = ((from) ? `&from=${from}` : ``) + ((to) ? `&to=${to}` : `` )  ;
  const assign_language = (language) ? `&language=${language}` : ``;
  const assign_sortBy = (sortBy) ? `&sortBy=${sortBy}` : `` ;
  const assign_PageSize_AND_PAGE = ((pageSize) ? `&pageSize=${pageSize}` : ``) + ((page) ? `&page=${page}` :  ``);
  const Optional_Params =  assignSources + assignDomain + assignFromAndTo + assign_language + assign_sortBy  + assign_PageSize_AND_PAGE;
  const Assigned_params =  `&q=${q}` + Optional_Params;
return this.http.get(GET_QUERY_URL + Assigned_params).map(res => res);
}

}
