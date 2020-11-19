import { Injectable } from '@angular/core';
import {Utils} from '../util';

export type ReligionName = ('christianity' | 'islam' | 'buddhism');

export const TOTAL_RELIGIONS: ReligionName[] = ['christianity', 'islam', 'buddhism'];

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  public seenReligions: ReligionName[] = [];

  seenAll = (): boolean => TOTAL_RELIGIONS.length === this.seenReligions.length;
  findDiff = (): ReligionName[] => TOTAL_RELIGIONS.filter(x => !this.seenReligions.includes(x));

  viewReligion = (religion: ReligionName): void => {
    this.seenReligions.push(religion);
    this.seenReligions = this.seenReligions.filter(Utils.onlyUnique);

    console.log('seen religions: ', this.seenReligions);
  }
}
