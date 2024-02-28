import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PropertylistComponent } from './propertylist/propertylist.component';
import { PropertyService } from './property.service';

@NgModule({
  declarations: [
    AppComponent,
    
    PropertylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
