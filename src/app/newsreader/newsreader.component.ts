import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-newsreader',
  templateUrl: './newsreader.component.html',
  styleUrls: ['./newsreader.component.css']
})
export class NewsreaderComponent implements OnInit {

  public newsdata = [];
  public newsdata2 = [];

  constructor(private _jsonfiledata : ConnectService , private router : Router) { }

  ngOnInit() {
    this._jsonfiledata.getData()
        .subscribe(data => {
            this.newsdata = Object.keys(data).map(key => ({name: key, value: data[key]}));
            console.log(this.newsdata);
            this.newsdata2 = this.newsdata[2].value;
            console.log(this.newsdata2);
        });
  }

}
