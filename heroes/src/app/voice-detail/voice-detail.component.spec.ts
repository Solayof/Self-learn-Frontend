import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceDetailComponent } from './voice-detail.component';

describe('VoiceDetailComponent', () => {
  let component: VoiceDetailComponent;
  let fixture: ComponentFixture<VoiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
