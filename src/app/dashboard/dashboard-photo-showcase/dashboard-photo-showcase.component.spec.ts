import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPhotoShowcaseComponent } from './dashboard-photo-showcase.component';

describe('DashboardPhotoShowcaseComponent', () => {
  let component: DashboardPhotoShowcaseComponent;
  let fixture: ComponentFixture<DashboardPhotoShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPhotoShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPhotoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
