import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DirectivesComponent } from './directives/directives.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { PipesComponent } from './pipes/pipes.component';
import { ErrorComponent } from './error/error.component';
import { ParentcomponentListComponent } from './parentcomponent-list/parentcomponent-list.component';

const routes: Routes = [
  {path:'',redirectTo:'authenticate',pathMatch:'full'},
  {path:'pipes',component:PipesComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'authenticate',component:AuthenticateComponent},
  {path:'pc',component:ParentcomponentListComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
