import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModelComponent } from './generic-model.component';

describe('GenericModelComponent', () => {
  let component: GenericModelComponent;
  let fixture: ComponentFixture<GenericModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
