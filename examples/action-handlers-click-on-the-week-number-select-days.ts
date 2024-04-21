import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    selection: {
      day: 'multiple-ranged',
    },
    visibility: {
      weekNumbers: true,
    },
  },
  actions: {
    clickWeekNumber(event, number, days, year, self) {
      self.settings.selected.dates = days.map((day) => day.dataset.calendarDay);
      self.update({ dates: true });
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
