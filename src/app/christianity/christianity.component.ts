import { Component, OnInit } from '@angular/core';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-christianity',
  templateUrl: './christianity.component.html',
  styleUrls: ['./christianity.component.scss']
})
export class ChristianityComponent implements OnInit {

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('christianity');
  }

}
