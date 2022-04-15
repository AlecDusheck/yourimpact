import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxinsComponent } from './toxins.component';

describe('ToxinsComponent', () => {
  let component: ToxinsComponent;
  let fixture: ComponentFixture<ToxinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToxinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
