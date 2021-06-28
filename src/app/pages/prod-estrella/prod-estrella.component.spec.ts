import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdEstrellaComponent } from './prod-estrella.component';

describe('ProdEstrellaComponent', () => {
  let component: ProdEstrellaComponent;
  let fixture: ComponentFixture<ProdEstrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdEstrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdEstrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
