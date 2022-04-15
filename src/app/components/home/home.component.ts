import { Component } from '@angular/core';
import {SimpleCardProps} from "../simple-card/simple-card.component";
import {StoryService} from "../../services/story.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public topReasons: SimpleCardProps[] = [
    {
      title: 'Toxic Substances',
      content: 'Toxic substances are all around us. They\'re in the food we eat, the water we drink, and the air we breathe.',
      imagePath: '/assets/rect1.png',
    },
    {
      title: 'Food Choice',
      content: 'When it comes to food, we are what we eat. It\'s important to be mindful of the choices we make and the impact they have on our health.',
      imagePath: '/assets/rect2.png',
    },
    {
      title: 'Environmental Impact',
      content: 'When it comes to your personal environmental impact, there are many things you can do to reduce it.',
      imagePath: '/assets/rect3.png',
    }
  ];

  constructor(
    private readonly storyService: StoryService,
  ) { }

  getLink = () => {
    const diff = this.storyService.findDiff();
    if (diff.length === 0) { return '/summary'; }
    return '/' + diff[0];
  }
}
