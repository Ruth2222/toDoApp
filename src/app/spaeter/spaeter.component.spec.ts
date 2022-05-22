import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaeterComponent } from './spaeter.component';

describe('SpaeterComponent', () => {
  let component: SpaeterComponent;
  let fixture: ComponentFixture<SpaeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
