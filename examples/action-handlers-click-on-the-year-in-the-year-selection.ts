import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  type: 'year',
  actions: {
    clickYear(event, self) {
      console.log(self.selectedYear);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
