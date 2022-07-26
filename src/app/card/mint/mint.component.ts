import { PopupComponent } from './../popup/popup.component';
import { ApiService } from './../../trustyx/services/api.service';
import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss']
})
export class MintComponent implements OnInit {
  dialogRef!: MatDialogRef<any>;
  post:any=[];
  constructor(private mint:ApiService,public dialog: MatDialog) {
    
    this.mint.mintcall().subscribe(result=>{
    console.log(result)
    this.post=result
  })
    
   }


  ngOnInit(): void {
  }
  openDialog() {
    // const dialogRef = this.dialog.open();
    this.dialogRef = this.dialog.open(PopupComponent, {
      height: '80%',
      width: '80%'
  });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
  


