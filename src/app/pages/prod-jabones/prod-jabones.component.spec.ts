import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdJabonesComponent } from './prod-jabones.component';

describe('ProdJabonesComponent', () => {
  let component: ProdJabonesComponent;
  let fixture: ComponentFixture<ProdJabonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdJabonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdJabonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
