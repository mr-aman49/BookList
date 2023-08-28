import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDetailComponent } from './volume-detail.component';

describe('VolumeDetailComponent', () => {
  let component: VolumeDetailComponent;
  let fixture: ComponentFixture<VolumeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeDetailComponent]
    });
    fixture = TestBed.createComponent(VolumeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
