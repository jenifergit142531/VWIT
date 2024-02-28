import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { EditpropertyComponent } from './editproperty/editproperty.component';

const routes: Routes = [
  {path:'plist',component:PropertylistComponent},
  {path:'addprop',component:AddpropertyComponent},
  {path:'editprop/:id',component:EditpropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
