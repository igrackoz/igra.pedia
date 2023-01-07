import { Directive } from '@angular/core';

@Directive({
  selector: '[appScrollPosition]',
  host: {'(window:scroll)': 'track($event)'}
})
export class ScrollPositionDirective {

  track($event: Event) {
    console.debug("Scroll Event", $event);
  }
}
