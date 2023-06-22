import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFolioComponent } from './port-folio.component';

describe('PortFolioComponent', () => {
  let component: PortFolioComponent;
  let fixture: ComponentFixture<PortFolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortFolioComponent]
    });
    fixture = TestBed.createComponent(PortFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
