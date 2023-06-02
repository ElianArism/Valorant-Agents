import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PreloadImgDirective } from './directives/preload-img.directive';
import { AgentDetailsComponent } from './pages/agent-details/agent-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchAgentsComponent } from './pages/search-agents/search-agents.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAgentsComponent,
    AgentDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PreloadImgDirective,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
