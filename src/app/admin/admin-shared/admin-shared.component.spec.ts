import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSharedComponent } from './admin-shared.component';

describe('AdminSharedComponent', () => {
  let component: AdminSharedComponent;
  let fixture: ComponentFixture<AdminSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
