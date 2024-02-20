import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public condition: boolean = true;
  public show = false;
  public home: string = 'home';
  @Output() public hideheader = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.condition = !this.condition;
    this.show = !this.show;
  }
  onShow() {
    this.hideheader.emit(false);
  }
  onHide() {
    this.hideheader.emit(true);
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
