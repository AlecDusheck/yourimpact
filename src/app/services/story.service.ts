import { Injectable } from '@angular/core';
import {Utils} from '../../util';

export type TopicName = ('toxins' | 'food' | 'environment');

export const TOTAL_TOPICS: TopicName[] = [
  'toxins',
  'food',
  'environment'
];

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  public seenTopics: TopicName[] = [];
  public seenSummaryComplete = false;

  seenAll = (): boolean => TOTAL_TOPICS.length === this.seenTopics.length;
  findDiff = (): TopicName[] => TOTAL_TOPICS.filter(x => !this.seenTopics.includes(x));

  viewTopic = (topic: TopicName): void => {
    this.seenTopics.push(topic);
    this.seenTopics = this.seenTopics.filter(Utils.onlyUnique);
  }

  viewSummary = (): void => {
    this.seenSummaryComplete = this.seenAll();
  }
}
