import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertylistComponent } from './propertylist/propertylist.component';

const routes: Routes = [
  {path:'plist',component:PropertylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
