import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PapersViewComponent } from './views/papers-view/papers-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path:"papers", component: PapersViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }