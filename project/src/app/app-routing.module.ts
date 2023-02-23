import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputOutputComponent} from 'src/app/input-output/input-output.component';
import {NgContentComponent} from 'src/app/ng-content/ng-content.component';
import {ParamsChildrenComponent} from 'src/app/params/params-children/params-children.component';
import {ParamsComponent} from 'src/app/params/params.component';
import {RxSubjectComponent} from 'src/app/rx-subject/rx-subject.component';
import {TemplateTutoComponent} from 'src/app/template-tuto/template-tuto.component';
import {ViewEncapsulationComponent} from 'src/app/view-encapsulation/view-encapsulation.component';

const routes: Routes = [
  {path: 'template-tuto', component: TemplateTutoComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'subject', component: RxSubjectComponent},
  {path: 'view-encapsulation', component: ViewEncapsulationComponent},
  {path: 'ng-content', component: NgContentComponent},
  {path: 'params', component: ParamsComponent, data: {a: 1}, children: [
      {path: ':id', component: ParamsChildrenComponent, data: {b: 2}}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
