import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBComponent } from 'src/app/view-encapsulation/comp-b/comp-b.component';

describe('CompAComponent', () => {
  let component: CompBComponent;
  let fixture: ComponentFixture<CompBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
