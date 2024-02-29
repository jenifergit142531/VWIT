import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouselistComponent } from './houselist/houselist.component';

const routes: Routes = [
  {
    path:'hlist',component:HouselistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
