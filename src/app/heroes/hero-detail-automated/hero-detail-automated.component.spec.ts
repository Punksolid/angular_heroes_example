import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailAutomatedComponent } from './hero-detail-automated.component';

describe('HeroDetailAutomatedComponent', () => {
  let component: HeroDetailAutomatedComponent;
  let fixture: ComponentFixture<HeroDetailAutomatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailAutomatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailAutomatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
