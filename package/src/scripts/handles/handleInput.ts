import { VanillaCalendar } from '@src/vanilla-calendar';
import { createCalendarToInput } from '@scripts/helpers/createCalendarToInput';
import { setPositionCalendar } from '@scripts/helpers/position';

const handleInput = (self: VanillaCalendar) => {
	const cleanup: Array<() => void> = [];
	self.HTMLInputElement = self.HTMLElement as HTMLInputElement;

	const handleResize = () => setPositionCalendar(self.HTMLInputElement, self.HTMLElement, self.settings.visibility.positionToInput, self.CSSClasses);

	const documentClickEvent = (e: MouseEvent) => {
		if (!self || e.target === self.HTMLInputElement || self.HTMLElement?.contains(e.target as Node)) return;
		if (self.HTMLInputElement && self.HTMLElement) self.hide();
		window.removeEventListener('resize', handleResize);
		document.removeEventListener('click', documentClickEvent, { capture: true });
	};

	self.HTMLInputElement.addEventListener('click', () => {
		if (!self.isInputInit) {
			cleanup.push(createCalendarToInput(self));
		} else {
			setPositionCalendar(self.HTMLInputElement, self.HTMLElement, self.settings.visibility.positionToInput, self.CSSClasses);
			self.HTMLElement.style.visibility = 'visible';
			self.show();
		}
		window.addEventListener('resize', handleResize);
		document.addEventListener('click', documentClickEvent, { capture: true });
	});

	return () => {
		cleanup.forEach((clean) => clean());
	};
};

export default handleInput;
