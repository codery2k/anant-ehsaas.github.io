import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHowCanYouHelpComponent } from './dashboard-how-can-you-help.component';

describe('DashboardHowCanYouHelpComponent', () => {
  let component: DashboardHowCanYouHelpComponent;
  let fixture: ComponentFixture<DashboardHowCanYouHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHowCanYouHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHowCanYouHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
