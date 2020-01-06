import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule, MatListModule} from '@angular/material';

import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
