import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimageListComponent } from './adminimage-list.component';

describe('AdminimageListComponent', () => {
  let component: AdminimageListComponent;
  let fixture: ComponentFixture<AdminimageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminimageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminimageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
