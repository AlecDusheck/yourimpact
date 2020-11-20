import { Injectable } from '@angular/core';
import {Utils} from '../../util';

export type ReligionName = ('christianity' | 'islam' | 'buddhism');

export const TOTAL_RELIGIONS: ReligionName[] = [
  'buddhism',
  'christianity',
  'islam'
];

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  public seenReligions: ReligionName[] = [];
  public seenSummaryComplete = false;

  seenAll = (): boolean => TOTAL_RELIGIONS.length === this.seenReligions.length;
  findDiff = (): ReligionName[] => TOTAL_RELIGIONS.filter(x => !this.seenReligions.includes(x));

  viewReligion = (religion: ReligionName): void => {
    this.seenReligions.push(religion);
    this.seenReligions = this.seenReligions.filter(Utils.onlyUnique);
  }

  viewSummary = (): void => {
    this.seenSummaryComplete = this.seenAll();
  }
}
