import { Component, OnInit, inject, signal } from '@angular/core';
import { Agent } from 'src/app/interfaces/Agent';
import { ValorantAgentsService } from 'src/app/services/valorant-agents.service';

@Component({
  selector: 'app-search-agents',
  templateUrl: './search-agents.component.html',
  styleUrls: ['./search-agents.component.scss'],
})
export class SearchAgentsComponent implements OnInit {
  private readonly valorantAgentsService = inject(ValorantAgentsService);
  agents = signal<Agent[]>([]);

  ngOnInit(): void {
    this.getAgents();
  }

  private getAgents(): void {
    this.valorantAgentsService.getAgents().subscribe((agents) => {
      this.agents.set(agents);
      console.log(agents);
    });
  }
}
