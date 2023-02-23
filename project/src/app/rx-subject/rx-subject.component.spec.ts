import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectComponent } from './rx-subject.component';

describe('RxSubjectComponent', () => {
  let component: RxSubjectComponent;
  let fixture: ComponentFixture<RxSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
