import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-tab',
  templateUrl: './type-tab.component.html',
  styleUrls: ['./type-tab.component.sass']
})
export class TypeTabComponent implements OnInit {
  @Input() type: string;
  @Input() active: boolean;
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick() { this.btnClick.emit() }
}
