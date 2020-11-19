import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddhismComponent } from './buddhism.component';

describe('BuddhismComponent', () => {
  let component: BuddhismComponent;
  let fixture: ComponentFixture<BuddhismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuddhismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddhismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
