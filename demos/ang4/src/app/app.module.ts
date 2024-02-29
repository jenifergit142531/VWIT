import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouselistComponent } from './houselist/houselist.component';
import { HttpClientModule } from '@angular/common/http';
import { HousecreateComponent } from './housecreate/housecreate.component';
import { FormsModule } from '@angular/forms';
import { JsonfilereaderComponent } from './jsonfilereader/jsonfilereader.component';
import { HouseeditComponent } from './houseedit/houseedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HouselistComponent,
    HousecreateComponent,
    JsonfilereaderComponent,
    HouseeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
