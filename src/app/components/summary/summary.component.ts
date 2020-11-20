import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {Utils} from '../../../util';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(
    public readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewSummary();
  }

  getDiffAsString = () => this.storyService.findDiff().map(x => Utils.capitalize(x)).join(', ');

  getLink = (): {link: string, title: string} => {
    const diff = this.storyService.findDiff();
    return {
      link: '/' + diff[0],
      title: Utils.capitalize(diff[0])
    };
  }
}
