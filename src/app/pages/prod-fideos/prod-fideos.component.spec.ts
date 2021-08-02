import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFideosComponent } from './prod-fideos.component';

describe('ProdFideosComponent', () => {
  let component: ProdFideosComponent;
  let fixture: ComponentFixture<ProdFideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
