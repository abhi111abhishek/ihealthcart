import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCotegoryComponent } from './add-cotegory.component';

describe('AddCotegoryComponent', () => {
  let component: AddCotegoryComponent;
  let fixture: ComponentFixture<AddCotegoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCotegoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCotegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
