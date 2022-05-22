import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortschrittComponent } from './fortschritt.component';

describe('FortschrittComponent', () => {
  let component: FortschrittComponent;
  let fixture: ComponentFixture<FortschrittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortschrittComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortschrittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
