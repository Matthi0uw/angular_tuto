import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateTutoComponent} from 'src/app/template-tuto/template-tuto.component';

const routes: Routes = [
  {path: 'template-tuto', component: TemplateTutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
