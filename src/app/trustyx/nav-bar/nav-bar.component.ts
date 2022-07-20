import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Router} from '@angular/router'



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isDarkTheme= false;
  searchvalue:string="";
  @Output() searchtextchanged : EventEmitter<any> =new EventEmitter<any>();

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onsearchtextchanged(){
    this.searchtextchanged.emit(this.searchvalue);
  }
  Logout(){
    let text = "are you sure to logout";
  if (confirm(text) == true) {
    alert( "logout successfully");
    this.router.navigate(['/logout'])
  } else {
    alert("You canceled!");
  }
  }
  toggleTheme(){
    if(!this.isDarkTheme){
      if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
      }
    }else{
      if(!document.body.classList.contains('dark')){
        document.body.classList.add('dark');
      }
    }
  }
}

