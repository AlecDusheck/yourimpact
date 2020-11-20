import {Component, Input, OnInit} from '@angular/core';
import {WORKS_CITED} from '../../works-cited/works-cited.component';

@Component({
  selector: 'app-sources-card',
  templateUrl: './sources-card.component.html',
  styleUrls: ['./sources-card.component.scss']
})
export class SourcesCardComponent implements OnInit{
  @Input() sources: string[];
  public convertedSourceText: string[];

  ngOnInit(): void {
    this.convertedSourceText = this.sources.map(sourceTitle => {
      const convertedSource = WORKS_CITED.find(x => x.title === sourceTitle);

      if (!convertedSource) { return  sourceTitle; }
      if (convertedSource.link) {
        return `<a href="${convertedSource.link}">"${convertedSource.title}"</a> ${convertedSource.author ? `by ${convertedSource.author}` : ''}`;
      }

      return `"${convertedSource.title}" ${convertedSource.author ? `by ${convertedSource.author}` : ''}`;
    });
  }
}
