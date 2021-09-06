import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBebidaCalComponent } from './prod-bebida-cal.component';

describe('ProdBebidaCalComponent', () => {
  let component: ProdBebidaCalComponent;
  let fixture: ComponentFixture<ProdBebidaCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBebidaCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBebidaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
