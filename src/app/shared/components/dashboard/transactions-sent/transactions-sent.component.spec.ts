import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSentComponent } from './transactions-sent.component';

describe('TransactionsSentComponent', () => {
  let component: TransactionsSentComponent;
  let fixture: ComponentFixture<TransactionsSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsSentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
