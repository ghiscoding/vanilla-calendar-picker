import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    selection: {
      time: true,
      controlTime: 'range',
      stepHours: 5,
      stepMinutes: 5,
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
