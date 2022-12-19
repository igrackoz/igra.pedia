import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacemakerComponent } from './pacemaker.component';

describe('PacemakerComponent', () => {
  let component: PacemakerComponent;
  let fixture: ComponentFixture<PacemakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacemakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
