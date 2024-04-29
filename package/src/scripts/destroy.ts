import { VanillaCalendar } from '@src/vanilla-calendar';
import messages from '@scripts/helpers/getMessages';

const destroy = (self: VanillaCalendar) => {
	if (!self.isInit) throw new Error(messages.notInit);

	if (self.input) {
		self.HTMLElement?.parentElement?.removeChild(self.HTMLElement);
		if (self.HTMLInputElement?.replaceWith) {
			self.HTMLInputElement.replaceWith(self.HTMLOriginalElement);
		}
		self.HTMLInputElement = undefined;
	} else if (self.HTMLElement?.replaceWith) {
		self.HTMLElement.replaceWith(self.HTMLOriginalElement);
	}

	self.HTMLElement = self.HTMLOriginalElement;
	if (self.actions.destroyCalendar) self.actions.destroyCalendar(self);
};

export default destroy;
