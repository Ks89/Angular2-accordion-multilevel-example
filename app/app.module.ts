import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HTTP_PROVIDERS} from '@angular/http';

import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';

import {ValuesService} from './common/services/values.service';
import {SERVICES} from './common/services/services';

import {Accordion, AccordionGroup} from './common/components/accordion';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
            RouterModule.forRoot([
              {path: '', component: HomeComponent}
            ])
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent,
    Accordion,
    AccordionGroup
  ],
  providers: [
    ValuesService,
    SERVICES,
    HTTP_PROVIDERS
  ],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule { }
