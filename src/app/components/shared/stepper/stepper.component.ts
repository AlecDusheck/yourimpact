import { Component } from '@angular/core';
import {StoryService, TopicName, TOTAL_TOPICS} from '../../../services/story.service';
import {Utils} from '../../../../util';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  public topics = TOTAL_TOPICS;

  constructor(
    public readonly storyService: StoryService,
  ) { }

  capitalize = Utils.capitalize;
  TOTAL_TOPICS = TOTAL_TOPICS;

  hasSeen = (religion: TopicName): boolean => this.storyService.seenTopics.includes(religion);
  findIndex = (religion: TopicName): number => TOTAL_TOPICS.findIndex(x => x === religion) + 1;
}
