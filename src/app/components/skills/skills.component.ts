import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsArray:any [] = [
    {
      Id:1,
      cardTitle:'HTML',
      info:'bla bla',
      description: 'Marking structure strong,\nHTML weaves web\'s foundation,\nBoundless creations.',
      color:'red'
    },
    {
      Id:2,
      cardTitle:'CSS',
      info:'bla bla',
      description: 'In code\'s dance they blend, \nCSS skills paint pixels\' tale,\nDesigns come alive',
      color:'red'
    },
    {
      Id:3,
      cardTitle:'Bootstrap',
      info:'bla bla',
      description: 'Harnessing Bootstrap\'s strength,\n Responsive wonders take flight,\nCrafting fluid sites.',
      color:'red'
    },
    {
      Id:4,
      cardTitle:'Javascript',
      info:'bla bla',
      description: 'With scripts I wield, \nJavaScript magic unveiled, \nWeb\'s dynamic might.',
      color:'red'
    },
    {
      Id:5,
      cardTitle:'Typescript',
      info:'bla bla',
      description: 'With TypeScript\'s strong case,\nType-safe harmony takes place, Code thrives, errors erase.',
      color:'red'
    },
    {
      Id:6,
      cardTitle:'Angular',
      info:'bla bla',
      description: 'Angular\'s power sways,\nBuilding SPA\'s components race,\n Data binds, templates grace.',
      color:'red'
    },
    {
      Id:7,
      cardTitle:'C-Sharp',
      info:'bla bla',
      description: 'With C-Sharp skills honed,\nPowerful apps are intoned,\nOOP\'s might is shown.',
      color:'red'
    },
    {
      Id:8,
      cardTitle:'.Net Web Api',
      info:'bla bla',
      description: '.NET Web API skills wield,\nRESTful services are sealed,\nData served, clients thrilled.',
      color:'red'
    },
    {
      Id:9,
      cardTitle:'Entity FrameWork',
      info:'bla bla',
      description: 'Entity Framework skills gleam,\nDatabase interactions stream,\nORM logic, data\'s dream.',
      color:'red'
    },
    {
      Id:10,
      cardTitle:'Microsoft SQL Server',
      info:'bla bla',
      description: 'SQL Server skills adept,\nData management, queries swept,\nRelational power.',
      color:'red'
    },
    {
      Id:11,
      cardTitle:'Azure Funda',
      info:'bla bla',
      description: 'Azure\'s cloud in sight,\nScalable solutions take flight,\nApps deploy with might.',
      color:'red'
    },
    {
      Id:12,
      cardTitle:'Postman',
      info:'bla bla',
      description: 'In Postman\'s land I roam,\nAPIs tested, errors shown,\nRequests and tests I own.',
      color:'red'
    },
    

  ]
}
