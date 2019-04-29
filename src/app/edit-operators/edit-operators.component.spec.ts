import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperatorsComponent } from './edit-operators.component';

describe('EditOperatorsComponent', () => {
  let component: EditOperatorsComponent;
  let fixture: ComponentFixture<EditOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
