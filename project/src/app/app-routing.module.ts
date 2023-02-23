import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputOutputComponent} from 'src/app/input-output/input-output.component';
import {RxSubjectComponent} from 'src/app/rx-subject/rx-subject.component';
import {TemplateTutoComponent} from 'src/app/template-tuto/template-tuto.component';
import {ViewEncapsulationComponent} from 'src/app/view-encapsulation/view-encapsulation.component';

const routes: Routes = [
  {path: 'template-tuto', component: TemplateTutoComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'subject', component: RxSubjectComponent},
  {path: 'view-encapsulation', component: ViewEncapsulationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
