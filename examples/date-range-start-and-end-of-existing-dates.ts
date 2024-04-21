import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  date: {
    min: '1920-01-01',
    max: '2038-12-31',
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
