import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerUpContainerComponent } from './power-up-container.component';

describe('PowerUpContainerComponent', () => {
  let component: PowerUpContainerComponent;
  let fixture: ComponentFixture<PowerUpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerUpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerUpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
