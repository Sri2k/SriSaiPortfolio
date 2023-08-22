import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CommandPromptComponent } from './components/command-prompt/command-prompt.component';
import { TestimonalsComponent } from './components/testimonals/testimonals.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'skills',component:SkillsComponent},
  { path: 'command-prompt', component: CommandPromptComponent },
  {path:'testimonals',component:TestimonalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
