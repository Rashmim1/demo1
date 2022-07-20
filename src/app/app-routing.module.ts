import { ThemeComponent } from './theme/theme.component';

import { NftComponent } from './trustyx/nft/nft.component';
import { NavBarComponent } from './trustyx/nav-bar/nav-bar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './trustyx/main/main.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'nav',component:NavBarComponent},
  {path:'logout',component:ThemeComponent},
  {path:'nft',component:NftComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
