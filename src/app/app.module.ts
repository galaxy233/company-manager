import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { TelenotesService } from './telenotes.service'
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NumberBoxComponent } from './number-box/number-box.component';
import { CompanySelectorComponent } from './company-selector/company-selector.component';
import { CompanySelectorOptionsComponent } from './company-selector/company-selector-options/company-selector-options.component';
import { CompanySelectorItemComponent } from './company-selector/company-selector-item/company-selector-item.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyDetailsContactComponent } from './company-details/company-details-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanySelectorComponent,
    CompanySelectorOptionsComponent,
    CompanySelectorItemComponent,
    CompanyDetailsComponent,
    CompanyDetailsContactComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    Angular2FontawesomeModule
  ],
  providers: [TelenotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
