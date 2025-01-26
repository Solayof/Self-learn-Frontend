import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Voice } from './voices';
import { VOICES } from './mock-voices';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  constructor(
    private http:HttpClient,
    private messageService: MessageService
  ) { }
  getVoices(): Observable<Voice[]> {
    this.messageService.add("VoicesService: fetched heroes");
    return this.http.get<Voice[]>(this.voiceUrl)
    .pipe(
      catchError(this.handleError<Voice[]>('getVoices', []))
    )
  }

  getVoice(id:number): Observable<Voice> {
    this.messageService.add(`VoiceService: fetched voice id = ${id}`);
    const url = `${this.voiceUrl}/${id}`;
    return this.http.get<Voice>(url)
    .pipe(
      tap(_ => this.log(`fetched voice id=${id}`)),
      catchError(this.handleError<Voice>(`getVoice id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`VoiceService: ${message}`);
  }

  updateVoice(voice: Voice): Observable<any> {
    return this.http.put(this.voiceUrl, voice, this.httpOption)
    .pipe(
      tap(_ => this.log(`update voice id=${voice.id}`)),
      catchError(this.handleError<any>(`updateVoice`))
    );
  }

  addVoice(voice: Voice): Observable<Voice> {
    return this.http.post<Voice>(this.voiceUrl, voice, this.httpOption)
    .pipe(
      tap((newVoice: Voice) => {
        console.log(newVoice);
        this.log(`add voice w/ id=${newVoice.id}`)
      }),
      catchError(this.handleError<Voice>('addVocie'))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private voiceUrl:string ='api/voices';

  
}
