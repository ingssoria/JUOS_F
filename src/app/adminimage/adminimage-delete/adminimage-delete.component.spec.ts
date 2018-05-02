import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimageDeleteComponent } from './adminimage-delete.component';

describe('AdminimageDeleteComponent', () => {
  let component: AdminimageDeleteComponent;
  let fixture: ComponentFixture<AdminimageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminimageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminimageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
