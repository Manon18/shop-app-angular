import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiresListComponent } from './desires-list.component';

describe('DesiresListComponent', () => {
  let component: DesiresListComponent;
  let fixture: ComponentFixture<DesiresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
