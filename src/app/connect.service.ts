import { Injectable } from '@angular/core';
//here
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private _url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4&fbclid=IwAR0GrcdtXFH5oj6sMenL8DZH15B-O3fVkBgl9QZUogcmbAsxkbqWsLinVvU";
  
  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get(this._url);
  }
}
