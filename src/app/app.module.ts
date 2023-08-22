import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CommandPromptComponent } from './components/command-prompt/command-prompt.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './components/skills/skills.component';
import { ArrowComponent } from './components/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommandPromptComponent,
    SkillsComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
