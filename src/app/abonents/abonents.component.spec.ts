import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentsComponent } from './abonents.component';

describe('AbonentsComponent', () => {
  let component: AbonentsComponent;
  let fixture: ComponentFixture<AbonentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
