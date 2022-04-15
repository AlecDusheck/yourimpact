import { Component, OnInit } from '@angular/core';
import {StoryService} from "../services/story.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor(
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewTopic("food")
  }

}
