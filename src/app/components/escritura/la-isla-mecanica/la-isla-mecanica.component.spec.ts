import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaIslaMecanicaComponent } from './la-isla-mecanica.component';

describe('LaIslaMecanicaComponent', () => {
  let component: LaIslaMecanicaComponent;
  let fixture: ComponentFixture<LaIslaMecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaIslaMecanicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaIslaMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
