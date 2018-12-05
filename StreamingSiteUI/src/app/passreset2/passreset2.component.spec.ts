import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passreset2Component } from './passreset2.component';

describe('Passreset2Component', () => {
  let component: Passreset2Component;
  let fixture: ComponentFixture<Passreset2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passreset2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passreset2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
