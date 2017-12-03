import { SkillsRoutingModule } from './skills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';
import { SkillService } from './shared/skill.service';

@NgModule({
  declarations: [
    SkillComponent,
    SkillListComponent,
    SkillAdminComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  exports: [
    SkillsComponent
  ],
  providers: [
    SkillService
  ]
})
export class SkillsModule { }
