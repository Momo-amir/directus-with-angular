import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RteComponent } from './rte.component';

describe('RteComponent', () => {
  let component: RteComponent;
  let fixture: ComponentFixture<RteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
