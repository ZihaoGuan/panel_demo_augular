import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../../Agent';
@Component({
  selector: 'app-agent-item',
  templateUrl: './agent-item.component.html',
  styleUrls: ['./agent-item.component.sass', '../../../../../assets/font-icons/fonts.css']
})
export class AgentItemComponent implements OnInit {
  @Input() agent: Agent;
  constructor() { }

  ngOnInit(): void {
  }

}
