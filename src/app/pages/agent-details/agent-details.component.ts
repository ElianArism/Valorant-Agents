import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { Agent } from 'src/app/interfaces/Agent';
import { ValorantAgentsService } from 'src/app/services/valorant-agents.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
})
export class AgentDetailsComponent implements OnInit {
  private readonly valorantAgentsService = inject(ValorantAgentsService);
  private readonly r2 = inject(Renderer2);

  @ViewChild('agentDetailsContainer')
  agentDetailsContainer!: ElementRef<HTMLElement>;

  @Input()
  private readonly id!: string;

  agent = signal<Agent | null>(null);

  ngOnInit(): void {
    this.getValorantAgent();
  }

  private getValorantAgent(): void {
    this.valorantAgentsService.getAgentsById(this.id).subscribe((agent) => {
      if (!agent) return;
      this.agent.set(agent);
      this.setGradientBg();
    });
  }

  private setGradientBg(): void {
    const [g1, g2, g3, g4] = (this.agent() as Agent).backgroundGradientColors;
    this.r2.setStyle(
      this.agentDetailsContainer.nativeElement,
      'background',
      `linear-gradient(to right, #${g1}, #${g2}, #${g3},#${g4}) 500% 500%`
    );
    this.r2.setStyle(
      this.agentDetailsContainer.nativeElement,
      'background',
      `-webkit-linear-gradient(to right, #${g1}, #${g2}, #${g3},#${g4}) 500% 500%`
    );
  }
}
