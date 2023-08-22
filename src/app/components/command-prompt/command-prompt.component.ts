import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent {
  input: string = '';
  output: string = '';
  availableCommands: string[] = ['home','skills', 'help','testimonals'];
  availableProjectsCommands:string[] = ['tictoctoe']
  isOpen: boolean = true;
  previousInput:string=''
constructor(private router:Router){}

  handleCommand() {
    const command = this.input.trim().toLowerCase();

    if(command == 'help'){
      this.output = `Available commands:\n${this.availableCommands.join(', ')}`;
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
      this.output = `Available projects: ${this.availableProjectsCommands.join(', ')}`;
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
  
    // if (command === 'help') {
    //   this.output = `Available commands:\n${this.availableCommands.join(', ')}`;
    // } else if (this.availableCommands.includes(command)) {
    //   if (command === 'projects') {
    //     this.output = `Type 'list' to see the list of projects.`;
    //   } else {
    //     this.output = `Redirecting to ${command} page...`;
    //     this.router.navigate([command]);
    //     this.isOpen = false;
    //   }
    // } else if (command === 'projects' && this.input === 'list') {
    //   this.output = `Available projects: ${this.availableProjectsCommands.join(', ')}`;
    // } else if (this.availableProjectsCommands.includes(command)) {
    //   this.output = `Redirecting to ${command} project...`;
    //   this.router.navigate(['projects', command]);
    //   this.isOpen = false;
    // } else {
    //   this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
    // }
    
    
    this.previousInput=command
    this.input = '';
  }
  closeCommandPrompt() {
    this.isOpen = false; // Set isOpen to false to hide the component
  }
}
