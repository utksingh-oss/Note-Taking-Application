import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEditPage } from './notes-edit-page';

describe('NotesEditPage', () => {
  let component: NotesEditPage;
  let fixture: ComponentFixture<NotesEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesEditPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesEditPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
