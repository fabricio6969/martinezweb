import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBebidasComponent } from './prod-bebidas.component';

describe('ProdBebidasComponent', () => {
  let component: ProdBebidasComponent;
  let fixture: ComponentFixture<ProdBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBebidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
