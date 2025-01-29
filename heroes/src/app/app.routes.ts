import { Routes } from '@angular/router';
import { VoiceDetailComponent } from './voice-detail/voice-detail.component';
import { VoicesComponent } from './voices/voices.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"voices", title: "Voices", component: VoicesComponent},
    {path: "dashboard", title: "Voice Dashboard", component: DashboardComponent},
    {path:"", redirectTo: "/dashboard", pathMatch: "full"},
    {path: 'detail/:id', title: "Detail", component: VoiceDetailComponent}
];
