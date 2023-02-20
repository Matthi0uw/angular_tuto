import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  public value: string = 'null';

  public alert($event: string) {
    this.value = $event;
  }
}
