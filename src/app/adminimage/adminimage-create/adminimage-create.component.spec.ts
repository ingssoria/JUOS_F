import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimageCreateComponent } from './adminimage-create.component';

describe('AdminimageCreateComponent', () => {
  let component: AdminimageCreateComponent;
  let fixture: ComponentFixture<AdminimageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminimageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminimageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
