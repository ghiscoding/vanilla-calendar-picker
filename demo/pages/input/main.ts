// import { IOptions } from '@src/types';
// import VanillaCalendar from '@/package/build/vanilla-calendar.min';
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
			self.hide();
		},
	},
	settings: {
		visibility: {
			positionToInput: 'center',
		},
	},
};

const configDiv: IOptions = {
	input: true,
	actions: {
		changeToInput(e, self) {
			if (!self.selectedDates || !self.HTMLInputElement) return;
			if (self.selectedDates[0]) {
				self.HTMLInputElement.innerHTML = self.selectedDates[0];
			} else {
				self.HTMLInputElement.textContent = '';
			}
			self.hide();
		},
	},
	settings: {
		visibility: {
			positionToInput: 'auto',
		},
	},
};

document.addEventListener('DOMContentLoaded', () => {
	const calendarInput = new VanillaCalendar('#calendar-input', configInput);
	calendarInput.init();

	const calendarDiv = new VanillaCalendar('#calendar-div', configDiv);
	calendarDiv.init();
});
