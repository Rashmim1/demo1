import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
searchtext:any;
  constructor() { }

  ngOnInit(): void {
  }
  onserachtextentered(searchValue: any) {
    this.searchtext = searchValue;
    console.log(this.searchtext);
  }
  
}
