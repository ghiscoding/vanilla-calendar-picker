import { HtmlElementPosition } from '../../types';

type Position = 'center' | 'left' | 'right';
type PositionList = ['bottom' | 'top', 'center' | 'left' | 'right'];
/** Get HTML element offset with pure JS */
export declare function getOffset(elm?: HTMLElement | null): HtmlElementPosition | undefined;
/**
 * Get the Window Scroll top/left Position
 * @returns
 */
export declare function windowScrollPosition(): {
    left: number;
    top: number;
};
export declare function getViewportDimensions(): {
    vw: number;
    vh: number;
};
/** calculate available space for each side of the DOM element */
export declare function calculateAvailableSpace(element: HTMLElement): {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export declare function getAvailablePosition(parentElm: HTMLElement, pickerElm: HTMLElement): {
    canShow: {
        top: boolean;
        bottom: boolean;
        left: boolean;
        right: boolean;
    };
    parentPositions: PositionList;
};
export declare function findBestPickerPosition(input: HTMLInputElement, calendar: HTMLElement): Position | PositionList;
export {};
//# sourceMappingURL=position.d.ts.map