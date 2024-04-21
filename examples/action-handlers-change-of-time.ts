import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    selection: {
      time: true,
    },
  },
  actions: {
    changeTime(event, self) {
      console.log(self.selectedTime);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
