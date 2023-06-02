import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreloadImgDirective } from '../directives/preload-img.directive';
import { AgentAbilityDetailsComponent } from './agent-ability-details/agent-ability-details.component';
import { AgentCardComponent } from './agent-card/agent-card.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AgentAbilityDetailsComponent,
    AgentCardComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, RouterModule, PreloadImgDirective],
  exports: [AgentAbilityDetailsComponent, AgentCardComponent, LoadingComponent],
})
export class ComponentsModule {}
