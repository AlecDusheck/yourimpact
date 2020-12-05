import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {MapMarker} from '../shared/map-card/map-card.component';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrls: ['./islam.component.scss']
})
export class IslamComponent implements OnInit {

  sources = [
    'The Qur\'an', 'Eastern Islam and the ‘clash of civilizations’',
    'Image of the Quran',
    'Caliphate, a disputed concept, no longer has a hold over all Muslims',
    'In God\'s Path: The Arab Conquests and the Creation of an Islamic Empire',
  ];

  mapMarkers: MapMarker[] = [
    {
      label: 'Mecca',
      lat: 21.3891,
      long: 39.8579,
    }
  ];

  mapMarkersCaliphate: MapMarker[] = [
    {
      label: 'Medina (Rāshidun Caliphate)',
      lat: 24.5247,
      long: 39.5692,
    },
    {
      label: 'Damascus (Umayyad Caliphate)',
      lat: 33.5138,
      long: 36.2765,
    },
    {
      label: 'Kufa (Abbāsid Caliphate)',
      lat: 32.0472,
      long: 44.3709,
    },
    {
      label: 'Constantinople (Ottoman Empire)',
      lat: 41.0082,
      long: 28.9784,
    },
  ];

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('islam');
  }

}
