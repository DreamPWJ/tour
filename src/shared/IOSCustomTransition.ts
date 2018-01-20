import { IOSTransition } from 'ionic-angular/transitions/transition-ios';

/**
 * 自定义IOS动画
 */
export class IOSCustomTransition extends IOSTransition {

  init() {

    if (this.opts.duration === undefined || this.opts.duration === 0) {
      this.opts.duration = 300;
    }

    super.init();

  }
}
