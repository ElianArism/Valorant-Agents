import { Component, Input } from '@angular/core';
import { AgentAbility } from 'src/app/interfaces/Agent';

@Component({
  selector: 'app-agent-ability-details',
  templateUrl: './agent-ability-details.component.html',
  styleUrls: ['./agent-ability-details.component.scss'],
})
export class AgentAbilityDetailsComponent {
  @Input({ required: true })
  ability!: AgentAbility;
}
