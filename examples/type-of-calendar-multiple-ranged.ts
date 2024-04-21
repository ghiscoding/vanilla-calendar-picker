import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  type: 'multiple',
  months: 2,
  jumpMonths: 2,
  settings: {
    range: {
      disablePast: true,
    },
    selection: {
      day: 'multiple-ranged',
    },
    visibility: {
      daysOutside: false,
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
