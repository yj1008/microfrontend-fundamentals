// 숨겨진 js 파일은 이 프로젝트에서 ts 를 인식하지 못하기 때문에 자동 생성한 것으로 normal 하진 않다.

import { singleSpaAngular } from "single-spa-angular";
import { registerApplication, start } from "single-spa";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgZone } from "@angular/core";
import { AppModule } from "./src/app.module";
import { ReplaySubject } from "rxjs";

// 앵귤러는 bootstrapFunction 을 써야하고
// bootstrapFunction 에서 props를 파라미터로 받아올 수 있는데
// 문제는 이걸 컴포넌트에 어떻게 갖다 줄거냐
// single-spa 에서는 rxjs 를 쓴다 (컨벤션)
export const singleSpaPropsSubject = new ReplaySubject(1);

// singleSpaAngular - helper : 어떤 컴포넌트를 렌더할건지 도와줌
const app = singleSpaAngular({
  bootstrapFunction(singleSpaProps) {
    // 요렇게 씀 - 옵저버
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: "<app-root>",
  NgZone,
  domElementGetter() {
    return document.getElementById('different-container')
  }
});

registerApplication({
  name: "angular-app",
  app,
  activeWhen: ["/"],
  customProps: {
    authToken: "asdf7s98df7f6sd909f87sdf0",
  },
});

start();
