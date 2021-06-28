import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLimpiezaComponent } from './prod-limpieza.component';

describe('ProdLimpiezaComponent', () => {
  let component: ProdLimpiezaComponent;
  let fixture: ComponentFixture<ProdLimpiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdLimpiezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
