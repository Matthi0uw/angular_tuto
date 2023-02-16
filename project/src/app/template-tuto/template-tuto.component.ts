import { Component } from '@angular/core';

@Component({
  selector: 'app-template-tuto',
  templateUrl: './template-tuto.component.html',
  styleUrls: ['./template-tuto.component.scss']
})
export class TemplateTutoComponent {
  public kv = {propertyA : 2, propertyB: 3};
}
