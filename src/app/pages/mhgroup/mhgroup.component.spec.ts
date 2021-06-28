import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhgroupComponent } from './mhgroup.component';

describe('MhgroupComponent', () => {
  let component: MhgroupComponent;
  let fixture: ComponentFixture<MhgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
