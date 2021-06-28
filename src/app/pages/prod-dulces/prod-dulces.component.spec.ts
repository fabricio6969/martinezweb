import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDulcesComponent } from './prod-dulces.component';

describe('ProdDulcesComponent', () => {
  let component: ProdDulcesComponent;
  let fixture: ComponentFixture<ProdDulcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDulcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
