import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoctailsComponent } from './coctails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { CoctailDetailComponent } from './coctail-detail/coctail-detail.component';
import { CoctailSearchComponent } from './coctail-search/coctail-search.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule, 
    NgbModule
  ],
  declarations: [CoctailsComponent, CoctailDetailComponent, CoctailSearchComponent],
  exports:[CoctailsComponent, CoctailDetailComponent, CoctailSearchComponent],
  entryComponents:[CoctailDetailComponent]
})
export class CoctailsModule { }
