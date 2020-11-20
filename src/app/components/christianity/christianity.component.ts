import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {MapMarker} from '../shared/map-card/map-card.component';

@Component({
  selector: 'app-christianity',
  templateUrl: './christianity.component.html',
  styleUrls: ['./christianity.component.scss']
})
export class ChristianityComponent implements OnInit {

  mapMarkers: MapMarker[] = [
    {
      label: 'Rome',
      lat: 41.9028,
      long: 12.4964,
    }
  ];
  sources = ['The Holy Bible', 'St. Paul the Apostle', 'The Early Church', 'Church and State Through the Centuries: A Collection of Historic Documents'];

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('christianity');
  }
}
