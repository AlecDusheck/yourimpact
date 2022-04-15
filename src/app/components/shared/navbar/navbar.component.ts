import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Utils} from '../../../../util';
import {TOTAL_TOPICS} from "../../../services/story.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public topics = TOTAL_TOPICS;
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
