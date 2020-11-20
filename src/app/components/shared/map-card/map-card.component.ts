import {Component, Input} from '@angular/core';

export interface MapMarker {
  lat: number;
  long: number;
  label: string;
}

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss']
})
export class MapCardComponent {
  @Input() mapMarkers: MapMarker[];
  @Input() title: string;

  getDefaultLat = (): number => this.mapMarkers.map(x => x.lat).reduce((a, b) => a + b, 0) / this.mapMarkers.length;
  getDefaultLong = (): number => this.mapMarkers.map(x => x.long).reduce((a, b) => a + b, 0) / this.mapMarkers.length;
}
