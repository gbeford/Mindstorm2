import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissionDetailsComponent } from './add-mission-details.component';

describe('AddMissionDetailsComponent', () => {
  let component: AddMissionDetailsComponent;
  let fixture: ComponentFixture<AddMissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
