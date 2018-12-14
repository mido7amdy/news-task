import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsreaderComponent } from './newsreader/newsreader.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path : '' , redirectTo : "/reader" , pathMatch : 'full'},
  {path :'reader', component: NewsreaderComponent},
  {path :'details/:comment' , component : NewsdetailComponent},
  {path : "**" , component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
