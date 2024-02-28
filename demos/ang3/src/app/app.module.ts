import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { PropertyService } from './property.service';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditpropertyComponent } from './editproperty/editproperty.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertylistComponent,
    AddpropertyComponent,
    EditpropertyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
