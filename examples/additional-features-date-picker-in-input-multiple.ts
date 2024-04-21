import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  input: true,
  type: 'multiple',
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
  actions: {
    changeToInput(e, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates[1]) {
        self.selectedDates.sort((a, b) => +new Date(a) - +new Date(b));
        self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
      } else if (self.selectedDates[0]) {
        self.HTMLInputElement.value = self.selectedDates[0];
      } else {
        self.HTMLInputElement.value = '';
      }
    },
  },
};

const calendarInput = new VanillaCalendar('#calendar-input', options);
calendarInput.init();
