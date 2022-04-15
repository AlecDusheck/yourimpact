import { Component, OnInit } from '@angular/core';
import {StoryService} from "../services/story.service";

@Component({
  selector: 'app-toxins',
  templateUrl: './toxins.component.html',
  styleUrls: ['./toxins.component.scss']
})
export class ToxinsComponent implements OnInit {

  constructor(
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewTopic("toxins")
  }

}
