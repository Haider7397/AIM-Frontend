import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonstigesComponent } from './sonstiges.component';

describe('SonstigesComponent', () => {
  let component: SonstigesComponent;
  let fixture: ComponentFixture<SonstigesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonstigesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonstigesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
