import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBlockComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroBlockComponent;
  let fixture: ComponentFixture<HeroBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
