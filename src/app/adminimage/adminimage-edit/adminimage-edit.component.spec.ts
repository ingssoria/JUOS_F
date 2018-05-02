import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimageEditComponent } from './adminimage-edit.component';

describe('AdminimageEditComponent', () => {
  let component: AdminimageEditComponent;
  let fixture: ComponentFixture<AdminimageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminimageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminimageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
