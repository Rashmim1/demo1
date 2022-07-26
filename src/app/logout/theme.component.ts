// import { Component, OnInit } from '@angular/core';
import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Output() mode = new EventEmitter<boolean>();

  setDark = false;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  login(){
    this.router.navigate(['/nft'])
  }

  onChangeToggle() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
    console.log(this.setDark);
  }

}
