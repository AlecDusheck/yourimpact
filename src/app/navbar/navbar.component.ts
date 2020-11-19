import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {TOTAL_RELIGIONS} from '../story.service';
import {Utils} from '../../util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public religions = TOTAL_RELIGIONS;
  public route = '';

  constructor(
    private readonly router: Router,
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: NavigationEnd) => this.route = event.url);
  }

  public capitalize = Utils.capitalize;
}
