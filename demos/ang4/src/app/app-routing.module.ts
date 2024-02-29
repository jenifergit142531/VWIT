import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouselistComponent } from './houselist/houselist.component';
import { HousecreateComponent } from './housecreate/housecreate.component';

const routes: Routes = [
  {
    path:'hlist',component:HouselistComponent
  },
  {
    path:'hcreate',component:HousecreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
