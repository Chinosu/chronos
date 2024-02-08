import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightComponent } from './left-right.component';

describe('LeftRightComponent', () => {
  let component: LeftRightComponent;
  let fixture: ComponentFixture<LeftRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
