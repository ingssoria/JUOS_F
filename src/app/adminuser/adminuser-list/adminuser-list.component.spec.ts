import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserListComponent } from './adminuser-list.component';

describe('AdminuserListComponent', () => {
  let component: AdminuserListComponent;
  let fixture: ComponentFixture<AdminuserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
