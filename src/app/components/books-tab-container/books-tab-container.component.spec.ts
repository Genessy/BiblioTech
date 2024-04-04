import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTabContainerComponent } from './books-tab-container.component';

describe('BooksTabContainerComponent', () => {
  let component: BooksTabContainerComponent;
  let fixture: ComponentFixture<BooksTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksTabContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
