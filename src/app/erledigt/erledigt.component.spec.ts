import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErledigtComponent } from './erledigt.component';

describe('ErledigtComponent', () => {
  let component: ErledigtComponent;
  let fixture: ComponentFixture<ErledigtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErledigtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErledigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
