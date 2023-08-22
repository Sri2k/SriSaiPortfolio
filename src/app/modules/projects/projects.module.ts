import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { TicTocToeComponent } from './tic-toc-toe/tic-toc-toe.component';
const projectRoutes = [
  {path:'',component:ProjectsComponent},
  {path:'tictoctoe',component:TicTocToeComponent}
]


@NgModule({
  declarations: [
    ProjectsComponent,
    TicTocToeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(projectRoutes)
  ]
})
export class ProjectsModule { }
