import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.sass', '../../../../../assets/font-icons/fonts.css']
})
export class PopupDialogComponent implements OnInit {
  @Output() onClosePopup = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closePopup() {
    this.onClosePopup.emit()
  }

  addResources() { }
}
