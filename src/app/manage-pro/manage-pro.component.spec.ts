import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProComponent } from './manage-pro.component';

describe('ManageProComponent', () => {
  let component: ManageProComponent;
  let fixture: ComponentFixture<ManageProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
