import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAgripacComponent } from './prod-agripac.component';

describe('ProdAgripacComponent', () => {
  let component: ProdAgripacComponent;
  let fixture: ComponentFixture<ProdAgripacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdAgripacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAgripacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
