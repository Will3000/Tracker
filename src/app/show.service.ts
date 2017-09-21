import { Injectable } from '@angular/core';
import { Show } from './show';


@Injectable()
export class ShowService {
	getShows(): Promise<Show[]> {
		const SHOWS: Show[] = [
			{ id: 1, name: 'Game of Thrones', ep: 1},
			{ id: 2, name: 'Big Bang Theory', ep: 2}
		]
		return Promise.resolve(SHOWS);
	}
}