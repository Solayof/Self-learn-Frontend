import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VoiceService } from '../voice.service';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Voice } from '../voices';

@Component({
  selector: 'app-voice-search',
  imports: [NgFor, AsyncPipe, RouterLink],
  templateUrl: './voice-search.component.html',
  styleUrl: './voice-search.component.css'
})
export class VoiceSearchComponent implements OnInit{
  voices$!: Observable<Voice[]>
  private searchTerms = new Subject<string>()
  constructor(
    private voiceService: VoiceService
  ) {

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.voices$ = this.searchTerms
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.voiceService.searchVoices(term))
    );
  }

}
