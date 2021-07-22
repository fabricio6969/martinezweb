import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPastasComponent } from './prod-pastas.component';

describe('ProdPastasComponent', () => {
  let component: ProdPastasComponent;
  let fixture: ComponentFixture<ProdPastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdPastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
