import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


import { Show } from './show';

@Component({
	selector: 'show-detail',
	templateUrl: './show-detail.component.html',
	styleUrls: ['./show-detail.component.css']
})

export class ShowDetailComponenet implements OnInit{
	@Input() show: Show;
	@Output() getShowChange = new EventEmitter<Show>()
	copyShow: Show;

	submit(): void {
		this.getShowChange.emit(this.copyShow);
	}

	ngOnInit(): void {
		this.copyShow = Object.assign({}, this.show);
	}
}