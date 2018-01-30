import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Content} from "ionic-angular";

/**
 * Generated class for the ScrollToTopDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives. 返回顶部指令
 */
@Directive({
  selector: '[scroll-to-top]' // Attribute selector
})
export class ScrollToTopDirective {
/* @ViewChild(Content) content: Content;*/
/* private el:HTMLElement;*/
 @Input ('scroll-to-top') content: Content ;
  constructor(el:ElementRef) {
/*    this.el=el.nativeElement;*/
  }

  @HostListener('click')
  onClick() {
/*    console.log("返回顶部");*/
   this.content.scrollToTop();
  }
}
