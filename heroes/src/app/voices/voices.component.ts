import { Component } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VoiceDetailComponent } from '../voice-detail/voice-detail.component';
import { VoiceService } from '../voice.service';
import { Voice } from '../voices';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voices',
  imports: [VoiceDetailComponent, UpperCasePipe, FormsModule, NgFor, RouterLink],
  templateUrl: './voices.component.html',
  styleUrl: './voices.component.css'
})
export class VoicesComponent {
  constructor(
    private voiceServe: VoiceService,
    private messageService: MessageService
  ) {

  }
  selecteVoice?: Voice;
  onSelect(voice: Voice) {
    this.selecteVoice = voice;
    this.messageService.add(`HeroesComponent: selected hero id=${voice.id}`)
  }
  lists: Voice[] = [];
  getHeroes(): void {
    this.voiceServe.getVoices()
    .subscribe((lists) => this.lists = lists);
  }
  ngOnInit(): void {
    this.getHeroes()
  }
  add(name: string){
    name = name.trim();
    if (!name) { return}
    this.voiceServe.addVoice({name} as Voice)
    .subscribe( voice => this.lists.push(voice));
  }

//   voices: Voice = {
//     id: 1,
//     name: "Moses Solomon A"
//   };
}
