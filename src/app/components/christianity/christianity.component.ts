import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {MapMarker} from '../../../util';

@Component({
  selector: 'app-christianity',
  templateUrl: './christianity.component.html',
  styleUrls: ['./christianity.component.scss']
})
export class ChristianityComponent implements OnInit {

  mapMarkers: MapMarker[];
  sources = ['test1'];

  constructor(
    private readonly storyService: StoryService,
  ) {
    this.mapMarkers = [
      {
        label: 'Christianity',
        lat: 31.779400,
        long: 35.232071,
      }
    ];
  }

  ngOnInit(): void {
    this.storyService.viewReligion('christianity');
  }

}
