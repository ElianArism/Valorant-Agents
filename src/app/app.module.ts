import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentAbilityDetailsComponent } from './components/agent-ability-details/agent-ability-details.component';
import { AgentCardComponent } from './components/agent-card/agent-card.component';
import { PreloadImgDirective } from './directives/preload-img.directive';
import { AgentDetailsComponent } from './pages/agent-details/agent-details.component';
import { SearchAgentsComponent } from './pages/search-agents/search-agents.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentAbilityDetailsComponent,
    SearchAgentsComponent,
    PreloadImgDirective,
    AgentCardComponent,
    AgentDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
