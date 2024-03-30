import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewsContainerComponent } from './profile-views-container.component';

describe('ProfileViewsContainerComponent', () => {
  let component: ProfileViewsContainerComponent;
  let fixture: ComponentFixture<ProfileViewsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileViewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
