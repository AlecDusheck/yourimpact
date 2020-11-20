import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {MapMarker} from '../shared/map-card/map-card.component';

@Component({
  selector: 'app-christianity',
  templateUrl: './christianity.component.html',
  styleUrls: ['./christianity.component.scss']
})
export class ChristianityComponent implements OnInit {

  mapMarkers: MapMarker[];
  sources = ['Religion in the Ancient World'];

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
