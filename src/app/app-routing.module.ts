import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactListComponent} from './contact-list/contact-list.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path:"home",component:HomeComponent},
  {path:"contact-list",component:ContactListComponent}
  
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
