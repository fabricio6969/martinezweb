import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAvenaComponent } from './prod-avena.component';

describe('ProdAvenaComponent', () => {
  let component: ProdAvenaComponent;
  let fixture: ComponentFixture<ProdAvenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdAvenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAvenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
