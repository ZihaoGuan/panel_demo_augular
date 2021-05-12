import { Component, OnInit } from '@angular/core';
import { AgentService } from './services/agent.service';
import { Agent } from './Agent';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.sass', '../../../assets/font-icons/fonts.css']
})
export class AgentComponent implements OnInit {
  tab: string = 'all'
  agents: Agent[] = [];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    //like a promise
    this.agentService.getAgents().subscribe((agents) => { this.agents = agents });
  }
  selectTypeTab(type: string) {
    this.tab = type;
  }

  getAgentsByType() {
    if (this.tab === "all") return this.agents
    return this.agents.filter((agent: Agent) => agent.type === this.tab)
  }

  getAgentCount() {
    if (this.agents.length == 0) return
    return this.agents.length
  }
  getAgentCountByStatus(status: string) {
    if (this.agents.length == 0) return
    const count = this.agents.reduce((acc, cur) => {
      if (cur.status === status) {
        return ++acc
      } else {
        return acc
      }
    }, 0)
    return count
  }
  getAgentCountByType(type: string) {
    if (this.agents.length == 0) return
    const count = this.agents.reduce((acc, cur) => {
      if (cur.type === type) {
        return ++acc
      } else {
        return acc
      }
    }, 0)
    return count
  }

  deleteResource(id: number, resource: string) {
    console.log(id)
    console.log(resource)
    const jsonToUpdate: Agent = this.agents.find(agent => agent.id == id)
    if (jsonToUpdate) {
      const copy: Agent = JSON.parse(JSON.stringify(jsonToUpdate))
      copy['resources'] = copy['resources'].filter(
        (e: string) => e !== resource
      )
      this.agentService.deleteResource(id, copy).subscribe((agent) => { jsonToUpdate['resources'] = agent['resources'] });
    }
  }
}
