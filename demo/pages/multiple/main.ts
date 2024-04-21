// import { IOptions } from '@src/types';
// import { VanillaCalendar } from '@/package/build/vanilla-calendar.min';
// import '@/package/build/vanilla-calendar.min.css';

import { IOptions } from '@src/types';
import { VanillaCalendar } from '@src/vanilla-calendar';
import '@src/styles/vanilla-calendar.css';

const config: IOptions = {
	type: 'multiple',
	actions: {
		clickDay: (e, self) => {
			console.log(self.selectedDates);
		},
	},
	settings: {
		selection: {
			day: 'multiple-ranged',
		},
		selected: {
			dates: ['2023-02-08:2023-02-16'],
			// month: 3,
			// year: 2023,
		},
	},
};

document.addEventListener('DOMContentLoaded', () => {
	const calendar = new VanillaCalendar('#calendar', config);
	calendar.init();
});
