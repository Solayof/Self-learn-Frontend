import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Voice } from './voices';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const voices = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {voices};
  }

  getId(voices: Voice[]): number {
    return voices.length > 0 ? Math.max(...voices.map(voice => voice.id)) +1 : 11;
  }
}
