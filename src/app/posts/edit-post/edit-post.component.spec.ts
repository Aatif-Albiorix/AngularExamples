import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPOstComponent } from './edit-post.component';

describe('EditPOstComponent', () => {
  let component: EditPOstComponent;
  let fixture: ComponentFixture<EditPOstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPOstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPOstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
