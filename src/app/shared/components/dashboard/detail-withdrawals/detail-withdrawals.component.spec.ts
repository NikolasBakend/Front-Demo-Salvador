import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWithdrawalsComponent } from './detail-withdrawals.component';

describe('DetailWithdrawalsComponent', () => {
  let component: DetailWithdrawalsComponent;
  let fixture: ComponentFixture<DetailWithdrawalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWithdrawalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailWithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
