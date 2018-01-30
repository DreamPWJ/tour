import { NgModule } from '@angular/core';
import { ScrollToTopDirective } from './scroll-to-top/scroll-to-top';

export const DIRECTIVES = [
  ScrollToTopDirective
];

@NgModule({
	declarations: [DIRECTIVES],
	imports: [],
	exports: [DIRECTIVES]
})
export class DirectivesModule {}
