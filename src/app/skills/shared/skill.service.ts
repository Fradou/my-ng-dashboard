import { of } from 'rxjs/observable/of';
import { SKILLS } from './../../test_data/mock-skills';
import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SkillService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }
}
