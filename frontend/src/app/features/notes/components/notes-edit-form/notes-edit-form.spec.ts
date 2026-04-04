import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEditForm } from './notes-edit-form';

describe('NotesEditForm', () => {
  let component: NotesEditForm;
  let fixture: ComponentFixture<NotesEditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesEditForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesEditForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
