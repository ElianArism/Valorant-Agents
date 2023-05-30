import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  computed,
} from '@angular/core';
import { Agent } from 'src/app/interfaces/Agent';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss'],
})
export class AgentCardComponent implements OnInit {
  @ViewChild('detailsBtn')
  detailsBtn!: ElementRef<HTMLSpanElement>;

  @Input({ required: true })
  agent!: Agent;

  agentDescriptionComputed = computed(
    () => this.agent.description.substring(0, 100) + '...'
  );

  constructor(private readonly r2: Renderer2) {}

  ngOnInit(): void {
    console.log(this.agent);
  }

  addDetailsBtnStyles(eventName: 'enter' | 'leave'): void {
    const color =
      eventName === 'enter'
        ? '#' + this.agent.backgroundGradientColors[0]
        : 'inherit';
    this.r2.setStyle(this.detailsBtn.nativeElement, 'color', color);
  }
}
