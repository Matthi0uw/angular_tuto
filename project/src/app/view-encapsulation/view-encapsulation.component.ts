import { Component } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss']
})
export class ViewEncapsulationComponent {
  public displayA = false;
  public displayB = false;

  public click(letter: string) {
    switch (letter) {
      case 'a':
        this.displayA = !this.displayA;
        break;
      case 'b':
        this.displayB = !this.displayB;
        break;
    }
  }
}
