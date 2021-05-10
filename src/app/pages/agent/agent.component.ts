import { Component, OnInit } from '@angular/core';
import { AgentService } from './services/agent.service';
import { Agent } from './Agent';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.sass', '../../../assets/font-icons/fonts.css']
})
export class AgentComponent implements OnInit {
  tab: string = 'All'
  agents: Agent[] = [];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    //like a promise
    this.agentService.getAgents().subscribe((agents) => { this.agents = agents });
  }
  selectTypeTab(type: string) {
    this.tab = type;
  }
}
