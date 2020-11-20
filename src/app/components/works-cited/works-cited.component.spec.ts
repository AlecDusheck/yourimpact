import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCitedComponent } from './works-cited.component';

describe('WorksCitedComponent', () => {
  let component: WorksCitedComponent;
  let fixture: ComponentFixture<WorksCitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksCitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksCitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
