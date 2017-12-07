import { SkillComponent } from './skills/skill/skill.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SkillsModule } from './skills/skills.module';
import { AppRoutingModule } from './app-routing.module';
import { VaultComponent } from './vault/vault.component';
import { HomeModule} from './home/home.module';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    VaultComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
