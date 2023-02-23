import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsChildrenComponent } from './params-children.component';

describe('ParamsChildrenComponent', () => {
  let component: ParamsChildrenComponent;
  let fixture: ComponentFixture<ParamsChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
