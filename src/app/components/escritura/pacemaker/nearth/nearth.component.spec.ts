import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearthComponent } from './nearth.component';

describe('NearthComponent', () => {
  let component: NearthComponent;
  let fixture: ComponentFixture<NearthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
