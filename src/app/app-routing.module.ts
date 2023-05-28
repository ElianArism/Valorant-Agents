import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAgentsComponent } from './pages/search-agents/search-agents.component';

const routes: Routes = [
  {
    path: 'search-agents',
    component: SearchAgentsComponent,
  },
  {
    path: '**',
    redirectTo: '/search-agents',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/search-agents',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
