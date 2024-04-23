// import { IOptions } from '@src/types';
// import { VanillaCalendar } from '@/package/build/vanilla-calendar.min';
// import '@/package/build/vanilla-calendar.min.css';

import { IOptions, IVanillaCalendar } from '@src/types';
import { VanillaCalendar } from '@src/vanilla-calendar';
import '@src/styles/vanilla-calendar.css';

const configInput: IOptions = {
	input: true,
	actions: {
		changeToInput(e, self: IVanillaCalendar) {
			if (!self.selectedDates || !self.HTMLInputElement) return;
			if (self.selectedDates[0]) {
				self.HTMLInputElement.value = self.selectedDates[0];
			} else {
				self.HTMLInputElement.value = '';
			}

			self.HTMLInputElement.value += ` ${self.selectedTime}`;
			// self.hide();
		},
	},
	date: {
		// min: '2022-03-20',
		today: new Date('2022-04-07T00:00'), // use T00:00 for local date
	},
	jumpToSelectedDate: true,
	toggleSelected: false,
	settings: {
		visibility: {
			positionToInput: 'center',
		},
		selection: {
			time: true, // or 12
		},
		range: {
			min: '2022-03-20',
			max: 'today',
		},
		selected: {
			// 	dates: [new Date('2022-01-07')],
			// 	// dates: ['2023-02-08'],
			// 	// dates: [new Date('2023-02-08')],
			// 	// dates: [1626307200000],
			// 	// month: 3,
			// 	// year: 2023,
		},
	},
};
// console.log(configInput);

const configDiv: IOptions = {
	input: true,
	type: 'multiple',
	jumpToSelectedDate: true,
	actions: {
		changeToInput(e, self) {
			if (!self.HTMLInputElement) return;
			if (self.selectedDates[1]) {
				self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
				self.HTMLInputElement.textContent = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
			} else if (self.selectedDates[0]) {
				self.HTMLInputElement.textContent = self.selectedDates[0];
			} else {
				self.HTMLInputElement.textContent = '';
			}
		},
	},
	settings: {
		selection: {
			day: 'multiple-ranged',
		},
		visibility: {
			daysOutside: false,
			positionToInput: 'auto',
		},
		range: {
			disableGaps: true,
		},
		selected: {
			dates: [new Date('2022-01-07')],
			// dates: ['2023-02-08'],
			// dates: [new Date('2023-02-08')],
			// dates: [1626307200000],
			// month: 3,
			// year: 2023,
		},
	},
};

document.addEventListener('DOMContentLoaded', () => {
	const calendarInput = new VanillaCalendar('#calendar-input', configInput);
	calendarInput.init();

	const calendarDiv = new VanillaCalendar('#calendar-div', configDiv);
	calendarDiv.init();
});
