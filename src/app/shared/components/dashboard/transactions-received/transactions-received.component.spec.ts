import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsReceivedComponent } from './transactions-received.component';

describe('TransactionsReceivedComponent', () => {
  let component: TransactionsReceivedComponent;
  let fixture: ComponentFixture<TransactionsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
