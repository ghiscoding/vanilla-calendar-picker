import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    selected: {
      month: 0,
      year: 2022,
      holidays: ['2022-01-01:2022-01-05', '2022-01-10', '2022-01-13'],
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
