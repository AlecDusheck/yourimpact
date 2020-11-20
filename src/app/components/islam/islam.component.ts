import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.scss']
})
export class IslamComponent implements OnInit {

  sources = ['Religion in the Ancient World'];

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('islam');
  }

}
