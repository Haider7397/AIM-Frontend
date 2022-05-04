import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankverbindungComponent } from './bankverbindung.component';

describe('BankverbindungComponent', () => {
  let component: BankverbindungComponent;
  let fixture: ComponentFixture<BankverbindungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankverbindungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankverbindungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
