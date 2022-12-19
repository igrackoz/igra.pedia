import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonellaComponent } from './ribbonella.component';

describe('RibbonellaComponent', () => {
  let component: RibbonellaComponent;
  let fixture: ComponentFixture<RibbonellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibbonellaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RibbonellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
