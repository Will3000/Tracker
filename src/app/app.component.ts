import { Component, OnInit } from '@angular/core';

import { Show } from './show';
import { ShowService } from './show.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShowService]
})

export class AppComponent implements OnInit {
  //title = 'Tracker';
  shows: Show[];
  selectedShow: Show;
  newShow: Show;
  
	constructor(private showService: ShowService) { }

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
}
