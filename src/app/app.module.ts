import { CoctailsModule } from './modules/coctails/coctails.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;


@NgModule({
  declarations: [			
    AppComponent,

   ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule, 
    CoctailsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
