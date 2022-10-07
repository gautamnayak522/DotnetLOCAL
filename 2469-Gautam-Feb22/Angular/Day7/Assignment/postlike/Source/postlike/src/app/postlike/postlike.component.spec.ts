import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlikeComponent } from './postlike.component';

describe('PostlikeComponent', () => {
  let component: PostlikeComponent;
  let fixture: ComponentFixture<PostlikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
