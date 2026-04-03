import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListPage } from './notes-list-page';

describe('NotesListPage', () => {
  let component: NotesListPage;
  let fixture: ComponentFixture<NotesListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
