import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyaddedComponent } from './recentlyadded.component';

describe('RecentlyaddedComponent', () => {
  let component: RecentlyaddedComponent;
  let fixture: ComponentFixture<RecentlyaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
