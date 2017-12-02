import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
 /** { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'posts', component: PostsComponent}**/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
