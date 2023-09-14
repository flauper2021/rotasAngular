import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './pages/portifolio/card/card.component';
import { TitleComponent } from './pages/index/title/title.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},

  //portfolio
  //portfolio/1
  //portfolio/abc
  { path:'portfolio', component: CardComponent, children: [
    { path:':id', component: CardComponent},
    { path:':id/:token', component: CardComponent},
  ]},

  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
