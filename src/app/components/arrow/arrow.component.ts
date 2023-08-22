import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class  ArrowComponent implements OnInit {
  isCommandPromptOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleCommandPrompt() {
    this.isCommandPromptOpen = !this.isCommandPromptOpen;
  }
}
