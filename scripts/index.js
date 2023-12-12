import Day, { openDay } from './Day.js';
import buildCard from './build.js';

//get Day.all from local storage or create new ones
Day.createAll();

//append Day.all to calendar
const calendar = document.querySelector('#calendar');
Day.all.forEach((day) => {
	calendar.appendChild(buildCard(day));
});

//add event listeners to Day.all
document.querySelectorAll('.day').forEach((dayCard, i) => {
	dayCard.addEventListener('click', () => {
		if (Day.all[i].isOpen) {
			alert('Ezt a napot már kinyitottad!');
		} else {
			openDay(i);
		}
	});
});
