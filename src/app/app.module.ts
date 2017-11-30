import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    SkillsComponent,
    SkillDetailsComponent,
    SkillAdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
