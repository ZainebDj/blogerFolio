import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFolioDetailComponent } from './port-folio-detail.component';

describe('PortFolioDetailComponent', () => {
  let component: PortFolioDetailComponent;
  let fixture: ComponentFixture<PortFolioDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortFolioDetailComponent]
    });
    fixture = TestBed.createComponent(PortFolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
