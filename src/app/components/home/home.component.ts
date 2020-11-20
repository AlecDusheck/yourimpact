import { Component } from '@angular/core';
import {SimpleCardProps} from '../shared/simple-card/simple-card.component';
import {StoryService} from '../../services/story.service';
import {MapMarker} from '../shared/map-card/map-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public topReasons: SimpleCardProps[];
  public mapMarkers: MapMarker[];

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

    this.topReasons = [
      {
        title: 'Conflict',
        content: 'Religion has a history of being spread by war. Even religions with incredibility peaceful scriptures have a history of war and battles.',
        imagePath: '/assets/home/war.jpg',
      },
      {
        title: 'Trade',
        content: 'Ancient trade routes have a tendency to spread religion as well. There are many case studies of this occurring',
        imagePath: '/assets/home/trade.jpg',
      },
      {
        title: 'Empires',
        content: 'Empires have played a critical role of enforcing religious practices.',
        imagePath: '/assets/home/empire.jpg',
      }
    ];
  }

  getLink = () => {
    const diff = this.storyService.findDiff();
    if (diff.length === 0) { return '/summary'; }
    return '/' + diff[0];
  }
}
