import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.scss']
})
export class IslamComponent implements OnInit {

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('islam');
  }

}
