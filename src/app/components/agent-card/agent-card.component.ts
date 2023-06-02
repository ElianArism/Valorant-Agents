import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  computed,
  inject,
} from '@angular/core';
import { Agent } from 'src/app/interfaces/Agent';
import { PreloadAgentAssetsService } from 'src/app/services/preload-agent-assets.service';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss'],
})
export class AgentCardComponent {
  private readonly preloadAgentAssetsService = inject(
    PreloadAgentAssetsService
  );

  @ViewChild('detailsBtn')
  detailsBtn!: ElementRef<HTMLSpanElement>;

  @Input({ required: true })
  agent!: Agent;

  agentDescriptionComputed = computed(
    () => this.agent.description.substring(0, 100) + '...'
  );

  constructor(private readonly r2: Renderer2) {}

  addDetailsBtnStyles(eventName: 'enter' | 'leave'): void {
    const color =
      eventName === 'enter'
        ? '#' + this.agent.backgroundGradientColors[0]
        : 'inherit';
    this.r2.setStyle(this.detailsBtn.nativeElement, 'color', color);
  }

  agentPortraitLoaded(): void {
    this.preloadAgentAssetsService.assetLoaded();
  }
}
