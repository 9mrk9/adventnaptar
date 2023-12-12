import randoms from './randomDays.js';
const { randomDays, randomImages } = randoms;

export default class Day {
	constructor(dayOfDecember, img) {
		const currentYear = new Date().getFullYear();
		this.day = new Date(currentYear, 11, parseInt(dayOfDecember)).getDate();
		this.img = `assets/${img}.png`;
		this.isOpen = false;
	}

	static all = [];
	static lastOpened = 0;

	static createAll() {
		if (localStorage.getItem('days')) {
			Day.all = JSON.parse(localStorage.getItem('days'));
		} else {
			Array.from({ length: 24 }, (_, i) => {
				const day = new Day(randomDays[i], randomImages[i]);
				Day.all.push(day);
			});

			localStorage.setItem('days', JSON.stringify(Day.all));
		}

		let maxDay = 0;
		Day.all.forEach((day) => {
			if (day.isOpen && day.day > maxDay) {
				Day.lastOpened = day.day;
				maxDay = day.day;
			}
		});
	}
}

export const openDay = (i) => {
	if (
		Day.all[i].day <= new Date().getDate() &&
		Day.lastOpened + 1 === Day.all[i].day
	) {
		Day.all[i].isOpen = true;

		localStorage.setItem('days', JSON.stringify(Day.all));
		location.reload();
	} else {
		alert('Ezt a napot még nem nyithatod ki!');
	}
};
