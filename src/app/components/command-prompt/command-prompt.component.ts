import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Stack } from 'src/app/helpers/Stack';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent  {
  input: string = '';
  output: string = '';
  availableCommands: string[] = ['home','skills', 'help','testimonals'];
  availableProjectsCommands:string[] = ['tictoctoe',]
  isOpen: boolean = true;
  previousInput:string='';
  inputsStack: Stack<string> = new Stack<string>();
  historyIndex: number = -1;
 formattedCommands = this.availableCommands.map(command => `[${command}]`);
 formattedProjectCommands = this.availableProjectsCommands.map(command => `[${command}]`);


 constructor(private router: Router) {
  // Subscribe to router events only once in the constructor
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Navigation has completed, update the message
      this.isOpen = true;
    }
  });
}

  handleCommand() {
    const command = this.input.trim().toLowerCase();
    this.inputsStack.push(command);
    if(command == 'help'){
      this.output = `Available commands:\n${this.formattedCommands.join(', ')}`;
    }
    else if(this.availableCommands.includes(command)){
      this.output = `Redirecting to ${command} url...`;
      this.router.navigate([command]);
     this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            // Navigation has completed, update the message
            this.isOpen = false;
        }
    });
    }
    else if(command=='projects'){
      this.output = `Available projects: ${this.formattedProjectCommands.join(', ')}`;
    }
    else if(this.previousInput=='projects')
    {
    
      this.output = `Redirecting to ${command} url...`;
      this.router.navigate(['projects',command]);
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            // Navigation has completed, update the message
            this.isOpen = false;
        }
      });


    }
    else {
      this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
    }
    
    
    this.previousInput=command
    this.input = '';
  }
  navigateHistory(direction: 'up' | 'down'): void {
    if (this.inputsStack.isEmpty()) return;
  
    if (direction === 'up') {
      this.historyIndex = Math.min(this.historyIndex + 1, this.inputsStack.size() - 1);
    } else if (direction === 'down') {
      this.historyIndex = Math.max(this.historyIndex - 1, -1);
    }
  
    if (this.historyIndex === -1) {
      this.input = '';
    } else {
      this.input = this.inputsStack.items[this.historyIndex] || '';
    }
  }
  


  closeCommandPrompt() {
    this.isOpen = false; // Set isOpen to false to hide the component
  }

 
}

