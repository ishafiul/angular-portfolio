import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuOpen = false
  animate = false
  menuClick(){
    this.menuOpen =!this.menuOpen
    this.animate =!this.animate
  }
  constructor() { }

  ngOnInit(): void {
  }

}
