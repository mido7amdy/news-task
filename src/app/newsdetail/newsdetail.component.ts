import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {

  public newsdataa = [];
  public newsdataa2 = [];
  public newsid;

  constructor(private _jsonfiledata : ConnectService , private route : ActivatedRoute) { }

  ngOnInit() {
    this._jsonfiledata.getData()
        .subscribe(data => {
            this.newsdataa = Object.keys(data).map(key => ({name: key, value: data[key]}));
            console.log(this.newsdataa);
            this.newsdataa2 = this.newsdataa[2].value;
            console.log(this.newsdataa2);
        });

    let id = parseInt(this.route.snapshot.paramMap.get('comment'));
    this.newsid = id;
  }

}
