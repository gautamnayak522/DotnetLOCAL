import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardlistComponent } from './standardlist.component';

describe('StandardlistComponent', () => {
  let component: StandardlistComponent;
  let fixture: ComponentFixture<StandardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
