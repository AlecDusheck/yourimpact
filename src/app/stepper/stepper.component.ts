import { Component } from '@angular/core';
import {ReligionName, StoryService, TOTAL_RELIGIONS} from '../story.service';
import {Utils} from '../../util';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  public religions = TOTAL_RELIGIONS;

  constructor(
    public readonly storyService: StoryService,
  ) { }

  capitalize = Utils.capitalize;
  TOTAL_RELIGIONS = TOTAL_RELIGIONS;

  hasSeen = (religion: ReligionName): boolean => this.storyService.seenReligions.includes(religion);
  findIndex = (religion: ReligionName): number => TOTAL_RELIGIONS.findIndex(x => x === religion) + 1;
}
