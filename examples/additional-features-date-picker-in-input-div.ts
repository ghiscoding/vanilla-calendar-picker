import { VanillaCalendar } from 'vanilla-calendar-picker';
import { IOptions } from 'vanilla-calendar-picker/types';
import 'vanilla-calendar-picker/build/vanilla-calendar.min.css';

const options: IOptions = {
  input: true,
  actions: {
    changeToInput(e, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates[0]) {
        self.HTMLInputElement.innerHTML = self.selectedDates[0];
        // if you want to hide the calendar after picking a date
        self.hide();
      } else {
        self.HTMLInputElement.textContent = '';
      }
    },
  },
  settings: {
    visibility: {
      positionToInput: 'center',
    },
  },
};

const calendarInput = new VanillaCalendar('#calendar-input-div', options);
calendarInput.init();
