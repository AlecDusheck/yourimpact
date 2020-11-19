import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sources-card',
  templateUrl: './sources-card.component.html',
  styleUrls: ['./sources-card.component.scss']
})
export class SourcesCardComponent {

  @Input() sources: string[];
}
