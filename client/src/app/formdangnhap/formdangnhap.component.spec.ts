import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdangnhapComponent } from './formdangnhap.component';

describe('FormdangnhapComponent', () => {
  let component: FormdangnhapComponent;
  let fixture: ComponentFixture<FormdangnhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdangnhapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormdangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
