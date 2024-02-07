import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X86LoopComponent } from './x86-loop.component';

describe('X86LoopComponent', () => {
  let component: X86LoopComponent;
  let fixture: ComponentFixture<X86LoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [X86LoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(X86LoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
