import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristianityComponent } from './christianity.component';

describe('ChristianityComponent', () => {
  let component: ChristianityComponent;
  let fixture: ComponentFixture<ChristianityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristianityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristianityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
