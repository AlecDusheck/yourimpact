import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../services/story.service';
import {SimpleCardProps} from '../shared/simple-card/simple-card.component';

@Component({
  selector: 'app-buddhism',
  templateUrl: './buddhism.component.html',
  styleUrls: ['./buddhism.component.scss']
})
export class BuddhismComponent implements OnInit {

  sources = ['Origin And Development Of Buddhism', 'East and West', 'Map of the Buddhist missions during the reign of Ashoka'];
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
