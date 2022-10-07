import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwithotpComponent } from './loginwithotp.component';

describe('LoginwithotpComponent', () => {
  let component: LoginwithotpComponent;
  let fixture: ComponentFixture<LoginwithotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginwithotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginwithotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
