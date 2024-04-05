import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksViewComponent } from './my-books-view.component';

describe('MyBooksViewComponent', () => {
  let component: MyBooksViewComponent;
  let fixture: ComponentFixture<MyBooksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBooksViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyBooksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
