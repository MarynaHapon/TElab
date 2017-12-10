import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentDetailComponent } from './abonent-detail.component';

describe('AbonentDetailComponent', () => {
  let component: AbonentDetailComponent;
  let fixture: ComponentFixture<AbonentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
