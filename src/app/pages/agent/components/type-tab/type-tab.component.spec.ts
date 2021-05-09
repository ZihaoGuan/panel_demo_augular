import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTabComponent } from './type-tab.component';

describe('TypeTabComponent', () => {
  let component: TypeTabComponent;
  let fixture: ComponentFixture<TypeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
