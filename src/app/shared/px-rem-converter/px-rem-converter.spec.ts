import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxRemConverter } from './px-rem-converter';

describe('PxRemConverter', () => {
  let component: PxRemConverter;
  let fixture: ComponentFixture<PxRemConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PxRemConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxRemConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
