import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDisplayTable } from './notes-display-table';

describe('NotesDisplayTable', () => {
  let component: NotesDisplayTable;
  let fixture: ComponentFixture<NotesDisplayTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesDisplayTable],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesDisplayTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
