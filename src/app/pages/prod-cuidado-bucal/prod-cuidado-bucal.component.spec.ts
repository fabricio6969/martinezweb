import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCuidadoBucalComponent } from './prod-cuidado-bucal.component';

describe('ProdCuidadoBucalComponent', () => {
  let component: ProdCuidadoBucalComponent;
  let fixture: ComponentFixture<ProdCuidadoBucalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCuidadoBucalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCuidadoBucalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
