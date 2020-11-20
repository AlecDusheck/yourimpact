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

  getDefaultLat = (): number => this.mapMarkers.length === 1 ? this.mapMarkers[0].lat : 34;
  getDefaultLong = (): number => this.mapMarkers.length === 1 ? this.mapMarkers[0].long : 40;
}
