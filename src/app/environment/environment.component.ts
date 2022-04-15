import { Component, OnInit } from '@angular/core';
import {StoryService} from "../services/story.service";

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  constructor(
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewTopic("environment")
  }

}
