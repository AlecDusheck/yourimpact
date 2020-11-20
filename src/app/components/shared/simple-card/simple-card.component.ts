import {Component, Input, OnInit} from '@angular/core';

export interface SimpleCardProps {
  imagePath: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input() props: SimpleCardProps;

  constructor() { }

  ngOnInit(): void {
  }

}
