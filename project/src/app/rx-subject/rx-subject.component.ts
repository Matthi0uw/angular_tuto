import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-rx-subject',
  templateUrl: './rx-subject.component.html',
  styleUrls: ['./rx-subject.component.scss']
})
export class RxSubjectComponent implements OnInit {
  public subject: Subject<number> = new Subject<number>();
  public subjectValue: number = 0;
  public behaviorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  public behaviorSubjectValue: number = 0;

  private counter = 22;

  public ngOnInit() {
    this.subject.subscribe((v) => this.subjectValue = v);
    this.behaviorSubject.subscribe((v) => this.behaviorSubjectValue = v);
  }

  public increment() {
    this.counter++;
    this.subject.next(this.counter);
    this.behaviorSubject.next(this.counter);
  }
}
