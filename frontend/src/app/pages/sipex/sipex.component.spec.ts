import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SipexComponent } from './sipex.component';

describe('SipexComponent', () => {
  let component: SipexComponent;
  let fixture: ComponentFixture<SipexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SipexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
