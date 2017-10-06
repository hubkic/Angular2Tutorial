import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sublad',
  templateUrl: './sublad.component.html',
  styleUrls: ['./sublad.component.css']
})
export class SubladComponent implements OnInit {
  @Input()
  stars: number;

  @Output()
  starsClicked: EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.starsClicked.emit(`Stars is ${this.stars}`);
  }

}
