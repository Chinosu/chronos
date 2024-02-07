import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravitySliderComponent } from './gravity-slider.component';

describe('GravitySliderComponent', () => {
  let component: GravitySliderComponent;
  let fixture: ComponentFixture<GravitySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GravitySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GravitySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
