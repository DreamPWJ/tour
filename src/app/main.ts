/*main.ts 入口文件 只调用一个入口文件，让入口文件帮我们去引入其它依赖的文件*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(()=>{
  //启动完成  web端启动页面隐藏
  document.querySelector('.preloader').remove();
});
