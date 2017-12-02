import { SkillService } from './../../../../Website-Angular/src/app/services/skill.service';
import { Skill } from './shared/skill.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  skillSelected: Skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  onSelectSkill(skill: Skill) {
    this.skillSelected = skill;
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }

}
