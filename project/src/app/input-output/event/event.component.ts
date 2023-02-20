import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() public value: string = 'defaultValue';
  @Input() public withEmit: boolean = false;

  @Output() public emitter: EventEmitter<string> = new EventEmitter<string>();

  private counter: number = 1;

  public set(value: string) {
    this.value = `${value} - ${this.counter}`;
    this.emitter.emit(this.value);

    this.counter++;
  }
}
