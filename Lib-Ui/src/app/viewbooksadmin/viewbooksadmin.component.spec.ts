import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbooksadminComponent } from './viewbooksadmin.component';

describe('ViewbooksadminComponent', () => {
  let component: ViewbooksadminComponent;
  let fixture: ComponentFixture<ViewbooksadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbooksadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbooksadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
