import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent {
  public params: Params = {};
  public queryParams: Params = {};
  public data: Params = {};
  public parentData: Params = {};
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.params = params;
    });
    this.route.data.subscribe((params) => {
      this.data = params;
    });
    this.route?.parent?.data.subscribe((params) => {
      this.parentData = params;
    });
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });
  }

}
