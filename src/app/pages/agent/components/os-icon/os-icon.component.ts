import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-os-icon',
  templateUrl: './os-icon.component.html',
  styleUrls: ['./os-icon.component.sass']
})
export class OsIconComponent implements OnInit {
  @Input() os: string;
  source = '';
  constructor() { }

  ngOnInit(): void {
    this.source = this.imageSource();
  }

  imageSource() {
    switch (this.os) {
      case "windows":
        return "/assets/os-icons/windows.png";
      case "ubuntu":
        return "/assets/os-icons/ubuntu.png";
      case "suse":
        return "/assets/os-icons/suse.png";
      case "debian":
        return "/assets/os-icons/debin.png";
      case "centos":
        return "/assets/os-icons/cent_os.png";
      default:
        return "";
    }
  }

}
