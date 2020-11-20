import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';

@Component({
  selector: 'app-buddhism',
  templateUrl: './buddhism.component.html',
  styleUrls: ['./buddhism.component.scss']
})
export class BuddhismComponent implements OnInit {

  sources = ['Religion in the Ancient World'];

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('buddhism');
  }

}
