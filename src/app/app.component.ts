import { Component, OnInit } from '@angular/core';

import { Show } from './show';
import { ShowService } from './show.service';
import {NgbAccordionConfig, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShowService, NgbAccordionConfig]
})

export class AppComponent implements OnInit {
  //title = 'Tracker';
  shows: Show[];
  selectedShow: Show;
  newShow: Show;

	constructor(private showService: ShowService, private accordionConfig: NgbAccordionConfig) {
    accordionConfig.closeOthers = true;
    accordionConfig.type = "primary";
  }

	addShow(): void {
    let defaultShow = {
      id: 0,
      name: '',
    }

    this.newShow = this.newShow ? null : defaultShow;
    // this.shows.push(this.newShow);
    console.log("🙉");
	}

	getShows(): void {
		this.showService.getShows().then(shows => {
			this.shows = shows;
		})
	}

	ngOnInit(): void {
		this.getShows();
	}

  onChange(show: Show, sign: string): void {
  	if(sign == '+'){
	  	show.ep++;
  	} else {
  		if( show.ep != 0) show.ep--;
  	}
  }

  onSelect(show: Show): void {
  	this.selectedShow = (this.selectedShow === show) ? null : show;
  }

  submit(): void {

  }

  public beforeChange($event: NgbPanelChangeEvent) {
    console.log($event);
    // console.log(this);
    if($event.panelId === "ngb-panel-0"){
      $event.preventDefault();
    }
  }
}
