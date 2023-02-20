import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputOutputComponent} from 'src/app/input-output/input-output.component';
import {TemplateTutoComponent} from 'src/app/template-tuto/template-tuto.component';

const routes: Routes = [
  {path: 'template-tuto', component: TemplateTutoComponent},
  {path: 'input-output', component: InputOutputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
