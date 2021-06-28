import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLicoresComponent } from './prod-licores.component';

describe('ProdLicoresComponent', () => {
  let component: ProdLicoresComponent;
  let fixture: ComponentFixture<ProdLicoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdLicoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLicoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
