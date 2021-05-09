import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-tab',
  templateUrl: './type-tab.component.html',
  styleUrls: ['./type-tab.component.sass']
})
export class TypeTabComponent implements OnInit {
  @Input() type: string;
  @Input() active: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
