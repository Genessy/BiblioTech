import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabContainerComponent } from './profile-tab-container.component';

describe('ProfileTabContainerComponent', () => {
  let component: ProfileTabContainerComponent;
  let fixture: ComponentFixture<ProfileTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTabContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
