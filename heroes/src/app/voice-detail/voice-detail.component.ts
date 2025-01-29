import { Component, Input } from '@angular/core';
import { UpperCasePipe, NgIf, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Voice } from '../voices';
import { VoiceService } from '../voice.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MessageService } from '../message.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-voice-detail',
  imports: [FormsModule, UpperCasePipe, NgIf, RouterLinkActive, RouterLink],
  templateUrl: './voice-detail.component.html',
  styleUrl: './voice-detail.component.css'
})
export class VoiceDetailComponent {
  @Input() voice?: Voice;
  constructor(
    private route: ActivatedRoute,
    private voiceService: VoiceService,
    private location: Location,
  ){}
  ngOnInit() {
    this.getVoice();
  }
  getVoice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.voiceService.getVoice(id)
    .subscribe(voice => this.voice = voice);
  }

  save() {
    if (this.voice) {
      this.voiceService.updateVoice(this.voice)
      .subscribe(()=> this.goBack())
    }
  }

  goBack() {
    this.location.back();
  }
}

