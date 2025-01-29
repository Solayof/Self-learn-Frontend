import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


const fakeDb = HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, {dataEncapsulation: false}
);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessagesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heroes';
  constructor(
    private messageService: MessageService,
  ){};
  
}
