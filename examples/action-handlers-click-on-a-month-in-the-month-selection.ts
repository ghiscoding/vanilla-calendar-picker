import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  type: 'month',
  actions: {
    clickMonth(e, self) {
      console.log(self.selectedMonth);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
