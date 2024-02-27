import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitlePipe } from './title.pipe';
import { ErrorComponent } from './error/error.component';
import { DynamicComponent } from './dynamic/dynamic.component';

import { ParentcomponentListComponent } from './parentcomponent-list/parentcomponent-list.component';
import { ChildcomponentdetailsComponent } from './childcomponentdetails/childcomponentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    AuthenticateComponent,
    SubscriptionComponent,
    PipesComponent,
    TitlePipe,
    ErrorComponent,
    DynamicComponent,
    
    ParentcomponentListComponent,
    ChildcomponentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
