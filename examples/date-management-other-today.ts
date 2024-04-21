import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  date: {
    today: new Date('2022-01-07'),
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
