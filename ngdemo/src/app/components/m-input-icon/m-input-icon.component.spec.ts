import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MInputIconComponent } from './m-input-icon.component';

describe('MInputIconComponent', () => {
  let component: MInputIconComponent;
  let fixture: ComponentFixture<MInputIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MInputIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MInputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
