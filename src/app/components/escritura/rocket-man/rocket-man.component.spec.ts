import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketManComponent } from './rocket-man.component';

describe('RocketManComponent', () => {
  let component: RocketManComponent;
  let fixture: ComponentFixture<RocketManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
