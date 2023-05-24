import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFoodDetailsComponent } from './see-food-details.component';

describe('SeeFoodDetailsComponent', () => {
  let component: SeeFoodDetailsComponent;
  let fixture: ComponentFixture<SeeFoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeFoodDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
