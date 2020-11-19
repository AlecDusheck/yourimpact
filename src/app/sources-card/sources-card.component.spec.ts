import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesCardComponent } from './sources-card.component';

describe('SourcesCardComponent', () => {
  let component: SourcesCardComponent;
  let fixture: ComponentFixture<SourcesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
