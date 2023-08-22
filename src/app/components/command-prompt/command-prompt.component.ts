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
  availableCommands: string[] = ['home','skills', 'help'];
  
constructor(private router:Router){}

  handleCommand() {
    const command = this.input.trim().toLowerCase();
  
    if (command === 'help') {
      this.output = `Available commands:\n${this.availableCommands.join(', ')}`;
    } else if (this.availableCommands.includes(command)) {
      this.output = `Redirecting to ${command} page...`;
      this.router.navigate([command]);
    } else {
      this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
    }

    this.input = '';
  }
}
