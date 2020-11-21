import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {SimpleCardProps} from '../shared/simple-card/simple-card.component';
import {MapMarker} from '../shared/map-card/map-card.component';

@Component({
  selector: 'app-buddhism',
  templateUrl: './buddhism.component.html',
  styleUrls: ['./buddhism.component.scss']
})
export class BuddhismComponent implements OnInit {

  mapMarkers: MapMarker[] = [
    {
      label: 'Xi\'an',
      lat: 34.3416,
      long: 108.9398,
    },
    {
      label: 'Zhangye',
      lat: 38.9259,
      long: 100.4498,
    },
    {
      label: 'Tianshui',
      lat: 34.5809,
      long: 105.7250,
    },
    {
      label: 'Jiayuguan',
      lat: 39.7726,
      long: 98.2894,
    },
    {
      label: 'Turpan',
      lat: 42.9513,
      long: 89.1898,
    },
    {
      label: 'Dunhuang',
      lat: 40.1421,
      long: 94.6620,
    },
    {
      label: 'Sarnath',
      lat: 25.3716,
      long: 83.0252,
    },
    {
      label: 'Mathura',
      lat: 27.4924,
      long: 77.6737,
    }
  ];
  sources = [
    'Origin And Development Of Buddhism',
    'East and West',
    'Map of the Buddhist missions during the reign of Ashoka',
    'Ashoka the Great',
    'A Silk Road Legacy: The Spread of Buddhism and Islam',
    'World Heritage Monuments and Related Edifices in India',
    'Yashini, East Gateway, Sanchi',
  ];
  ashokaSpreadCard: SimpleCardProps = {
    imagePath: '/assets/buddhism/ashoka-map.png',
    content: 'This map shows how the Maurya Empire under the rule of Aśoka spread Buddhism',
  };

  constructor(
    private readonly storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyService.viewReligion('buddhism');
  }

}
