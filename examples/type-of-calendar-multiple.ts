import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  type: 'multiple',
  months: 2,
  jumpMonths: 1,
  settings: {
    selection: {
      day: 'multiple',
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
