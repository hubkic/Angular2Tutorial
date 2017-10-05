import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubladComponent } from './sublad.component';

describe('SubladComponent', () => {
  let component: SubladComponent;
  let fixture: ComponentFixture<SubladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
