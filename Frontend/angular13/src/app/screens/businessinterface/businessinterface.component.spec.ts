import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessinterfaceComponent } from './businessinterface.component';

describe('BusinessinterfaceComponent', () => {
  let component: BusinessinterfaceComponent;
  let fixture: ComponentFixture<BusinessinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
