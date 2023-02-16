import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTutoComponent } from './template-tuto.component';

describe('TemplateTutoComponent', () => {
  let component: TemplateTutoComponent;
  let fixture: ComponentFixture<TemplateTutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
