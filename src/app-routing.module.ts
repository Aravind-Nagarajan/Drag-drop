import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './main/card/card.component';
import { AddCardComponent } from './main/add-card/add-card.component';


const routes: Routes = [
  { path: '', component: CardComponent},
  { path: 'add-card', component : AddCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
