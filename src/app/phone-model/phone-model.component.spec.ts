import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneModelComponent } from './phone-model.component';

describe('PhoneModelComponent', () => {
  let component: PhoneModelComponent;
  let fixture: ComponentFixture<PhoneModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
