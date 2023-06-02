import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Agent } from 'src/app/interfaces/Agent';
import { ValorantAgentsService } from 'src/app/services/valorant-agents.service';
import { Breakpoints } from 'src/app/utils/breakpoints';
import { PreloadAgentAssetsService } from '../../services/preload-agent-assets.service';

@Component({
  selector: 'app-search-agents',
  templateUrl: './search-agents.component.html',
  styleUrls: ['./search-agents.component.scss'],
})
export class SearchAgentsComponent implements OnInit, OnDestroy {
  private readonly valorantAgentsService = inject(ValorantAgentsService);
  private readonly preloadAgentAssetsService = inject(
    PreloadAgentAssetsService
  );
  private subscription!: Subscription;

  agentsBackup!: Agent[];
  agents = signal<Agent[]>([]);
  agentAssetsLoaded = signal<boolean>(false);

  ngOnInit(): void {
    this.getAgents();
    this.listenAgentsAssetsLoaded();
  }

  private getAgents(): void {
    this.valorantAgentsService.getAgents().subscribe((agents) => {
      this.agents.set(agents);
      this.agentsBackup = agents;
      this.preloadAgentAssetsService.AssetsToPreload = agents.length;
    });
  }

  private listenAgentsAssetsLoaded(): void {
    if (window.innerWidth <= Breakpoints.md) {
      this.agentAssetsLoaded.set(true);
      return;
    }
    this.subscription =
      this.preloadAgentAssetsService.AssetsLoadedListener.subscribe(
        (loaded) => {
          this.agentAssetsLoaded.set(loaded);
        }
      );
  }

  filterAgents(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (!value) {
      this.agents.set(this.agentsBackup);
      return;
    }
    this.agents.set(
      this.agentsBackup.filter((agent) =>
        agent.displayName.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
