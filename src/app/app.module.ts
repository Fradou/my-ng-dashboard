import { SkillComponent } from './skills/skill/skill.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SkillsModule } from './skills/skills.module';
import { SkillService } from './skills/shared/skill.service';
import { AppRoutingModule } from './app-routing.module';
import { VaultComponent } from './vault/vault.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    VaultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SkillsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
