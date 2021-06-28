import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPapelComponent } from './prod-papel.component';

describe('ProdPapelComponent', () => {
  let component: ProdPapelComponent;
  let fixture: ComponentFixture<ProdPapelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPapelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdPapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
