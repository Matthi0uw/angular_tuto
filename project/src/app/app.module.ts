import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CompBComponent} from 'src/app/view-encapsulation/comp-b/comp-b.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateTutoComponent } from './template-tuto/template-tuto.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { EventComponent } from './input-output/event/event.component';
import { RxSubjectComponent } from './rx-subject/rx-subject.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { CompAComponent } from './view-encapsulation/comp-a/comp-a.component';
import { ParamsComponent } from './params/params.component';
import { ParamsChildrenComponent } from './params/params-children/params-children.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { CompCComponent } from './ng-content/comp-c/comp-c.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateTutoComponent,
    InputOutputComponent,
    EventComponent,
    RxSubjectComponent,
    ViewEncapsulationComponent,
    CompAComponent,
    CompBComponent,
    ParamsComponent,
    ParamsChildrenComponent,
    NgContentComponent,
    CompCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
