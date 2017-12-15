import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentSearchComponent } from './abonent-search.component';

describe('AbonentSearchComponent', () => {
  let component: AbonentSearchComponent;
  let fixture: ComponentFixture<AbonentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
