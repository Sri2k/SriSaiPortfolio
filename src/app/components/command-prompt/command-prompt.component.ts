import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent {
  input: string = '';
  output: string = '';
  availableCommands: string[] = ['skills', 'help'];

constructor(private router:Router){}

  handleCommand() {
    const command = this.input.trim().toLowerCase();
    switch (command) {
      case 'skills':
        this.output = 'Redirecting to skills page...';
        this.router.navigate(['skills'])
        break;
      case 'help':
        this.output = `Available commands:\n${this.availableCommands.join(', ')}`;
        break;
      default:
        this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
    }
    this.input = '';
  }
}
