import { Component } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Params} from '@angular/router';

@Component({
  selector: 'app-params-children',
  templateUrl: './params-children.component.html',
  styleUrls: ['./params-children.component.scss']
})
export class ParamsChildrenComponent {
  public params: Params = {};
  public queryParams: Params = {};
  public data: Params = {};
  public parentData: Params = {};
  public snapshot: ActivatedRouteSnapshot;

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
    this.snapshot = this.route.snapshot;
  }

}
