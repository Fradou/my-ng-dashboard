import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SKILLS } from './../../test_data/mock-skills';
import { Skill } from './skill.model';

@Injectable()
export class SkillService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }
}
