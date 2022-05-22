import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetztComponent } from './jetzt.component';

describe('JetztComponent', () => {
  let component: JetztComponent;
  let fixture: ComponentFixture<JetztComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JetztComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JetztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
