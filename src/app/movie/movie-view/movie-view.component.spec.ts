import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewComponent } from './movie-view.component';

describe('BookViewComponent', () => {
  let component: MovieViewComponent;
  let fixture: ComponentFixture<MovieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
