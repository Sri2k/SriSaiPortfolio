import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/helpers/Stack';
import { ContactsMapping } from 'src/app/interfaces/ContactsMapping ';
import { ProjectsMapping } from 'src/app/interfaces/ProjectsMapping';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss'],
})
export class CommandPromptComponent implements OnInit {
  input: string = '';
  output: string = '';
  // toload:boolean = false;
  masteravailableCommands: string[] = [
    'home',
    'skills',
    'help',
    'testimonals',
    'projects',
    'contact',
  ];

  availableCommands: string[] = ['home', 'skills', 'help', 'testimonals'];
  availableProjectsCommands: string[] = ['tictoctoe', 'w3schools'];
  availableProjectsMapping: ProjectsMapping = {
    tictoctoe: 'tictoctoe',
    w3schools: 'https://www.w3schools.com/',
  };

  availableContactsCommands: string[] = ['email', 'linkedin', 'instagram'];
  availableContactsMapping: ContactsMapping = {
    email: 'gandusrisai@gmail.com',
    linkedin: 'https://www.w3schools.com/',
    instagram: 'https://www.w4schools.com/',
  };

  isOpen: boolean = true;
  previousInput: string = '';
  inputsStack: Stack<string> = new Stack<string>();
  historyIndex: number = -1;
  formattedMasterCommands = this.masteravailableCommands.map(
    (command) => `[${command}]`
  );
  formattedCommands = this.availableCommands.map((command) => `[${command}]`);
  formattedProjectCommands = this.availableProjectsCommands.map(
    (command) => `[${command}]`
  );
  formattedContactCommands = this.availableContactsCommands.map(
    (command) => `[${command}]`
  );

  constructor(private router: Router) { }
  ngOnInit(): void {
    // this.router.events.subscribe((routerEvent:any)=>{
    //   if(routerEvent instanceof NavigationStart){
    //     this.toload =true;
    //   }
    //   if(routerEvent instanceof NavigationEnd){
    //     this.toload =false;
    //   }
    // })
  }

  handleCommand() {
    const command = this.input.trim().toLowerCase();
    this.inputsStack.push(command);
    if (command == 'help') {
      this.output = `Available commands:\n${this.masteravailableCommands.join(
        ', '
      )}`;
    } else if (this.availableCommands.includes(command)) {
      this.output = `Redirecting to ${command} url...`;
      this.router.navigate([command]);
      console.log(this.isOpen);
      this.isOpen = false;
    } else if (command == 'projects') {
      this.output = `Available project commands: ${this.formattedProjectCommands.join(
        ', '
      )}`;
    } else if (this.previousInput == 'projects') {
      if (this.availableProjectsCommands.includes(command)) {
        const linkOrRoute = this.availableProjectsMapping[command];

        if (
          linkOrRoute.startsWith('http://') ||
          linkOrRoute.startsWith('https://')
        ) {
          // Open external links in a new tab/window
          window.open(linkOrRoute, '_blank');
        } else {
          // Navigate to routing commands
          this.router.navigate(['projects', linkOrRoute]);
        }
        this.isOpen = false;
      } else {
        this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
      }
    } else if (command == 'contact') {
      this.output = `Available contact commands: ${this.formattedContactCommands.join(
        ', '
      )}`;
    } else if (this.previousInput == 'contact') {
      if (this.availableContactsCommands.includes(command)) {
        this.output = `Redirecting to ${command} url...`;
        for (const key in this.availableContactsMapping) {
          if (this.availableContactsMapping.hasOwnProperty(key)) {
            window.open(this.availableContactsMapping[command], '_blank');
          }
        }
        this.isOpen = false;
      } else {
        this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
      }
    } else {
      this.output = `Command not recognized: ${command}\nType 'help' for a list of commands.`;
    }

    this.previousInput = command;
    this.input = '';
  }

  
  navigateHistory(direction: 'up' | 'down'): void {
    if (this.inputsStack.isEmpty()) return;

    if (direction === 'up') {
      this.historyIndex = Math.min(
        this.historyIndex + 1,
        this.inputsStack.size() - 1
      );
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
    this.isOpen = !this.isOpen; // Set isOpen to false to hide the component
  }
}

//  this.router.events.subscribe((event) => {
//     if (event instanceof NavigationEnd) {
//         // Navigation has completed, update the message
//         this.isOpen = false;
//     }
// });
