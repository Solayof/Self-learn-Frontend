import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { VoiceService } from '../voice.service';
import { Voice } from '../voices';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  voices: Voice[] = [];
  constructor(
    private voiceService: VoiceService
  ) {

  }
  ngOnInit() {
    this.getVoices()
  }
  getVoices() {
    this.voiceService.getVoices()
    .subscribe(voices => this.voices = voices.slice(1,5));
  }
}
