import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAdminComponent } from './project-admin/project-admin.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './shared/project.service';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectAdminComponent,
    ProjectComponent,
    ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectsModule { }
