import { Component, Input, OnInit, computed } from '@angular/core';
import { Agent } from 'src/app/interfaces/Agent';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss'],
})
export class AgentCardComponent implements OnInit {
  @Input({ required: true })
  agent!: Agent;

  agentDescriptionComputed = computed(
    () => this.agent.description.substring(0, 100) + '...'
  );
  ngOnInit(): void {}
}
