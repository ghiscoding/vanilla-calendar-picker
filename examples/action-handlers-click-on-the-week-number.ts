import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    visibility: {
      weekNumbers: true,
    },
  },
  actions: {
    clickWeekNumber(event, number, days, year, self) {
      console.log(`Week number: ${number}`);
      console.log(`Year of the week: ${year}`);
      console.log('Days of this week:', days);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
