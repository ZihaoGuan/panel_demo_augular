import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Agent } from '../../Agent';
@Component({
  selector: 'app-agent-item',
  templateUrl: './agent-item.component.html',
  styleUrls: ['./agent-item.component.sass', '../../../../../assets/font-icons/fonts.css']
})
export class AgentItemComponent implements OnInit {
  @Input() agent: Agent;
  @Output() onDeleteResource: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(resource: string) {
    this.onDeleteResource.emit(resource)
  }

}
