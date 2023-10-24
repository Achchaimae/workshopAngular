import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutComponent } from './ajout.component';

describe('AjoutComponent', () => {
  let component: AjoutComponent;
  let fixture: ComponentFixture<AjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutComponent]
    });
    fixture = TestBed.createComponent(AjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
