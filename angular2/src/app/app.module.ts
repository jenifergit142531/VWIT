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

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    AuthenticateComponent,
    SubscriptionComponent,
    PipesComponent,
    TitlePipe
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
