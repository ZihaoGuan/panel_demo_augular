import { Component, OnInit } from '@angular/core';
import { Agent } from './Agent';
import { AGENTS } from './mock-agents';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.sass', '../../../assets/font-icons/fonts.css']
})
export class AgentComponent implements OnInit {
  tab: string = 'All'
  agents: Agent[] = AGENTS;
  constructor() { }

  ngOnInit(): void {
  }
  selectTypeTab(type: string) {
    this.tab = type;
  }
}
