import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-links',
  templateUrl: './sidenav-links.component.html',
  styleUrls: ['./sidenav-links.component.scss']
})
export class SidenavLinksComponent implements OnInit {

  @Output() emitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  linkClick(){
    this.emitter.emit();
  }

}
