// 06 : Layout - index router, 404 fallback router
// 각 micro-app 에서 각각의 layout 이 있겠지만 root-config 에서는 top-level-layout 을 관리

// 이전꺼랑 비교해보면
// registerApplication 이 없음
//    이전의 방식 : 화면의 어느 영역에 micro-app 이 그려질지에 대한 정보가 없었음
//    이 방식 : 매직으로 화면을 잘 그려줌! 그리고 이 컨벤션은 바뀌지 않음. 바뀌는 건 오직 microfrontends-layout.html 뿐
// 구럼 언제 layout 하나?
//    -> top-level-layout

import layout from "./microfrontends-layout.html";
// 새로운 라이브러리 !!
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

// ** 중요 !!
// constructRoutes : 화면 그려주는 매직이다
// Parse our microfrontend layout
const routes = constructRoutes(layout);

// Create single-spa application objects for each microfrontend
const applications = constructApplications({
  routes,
  async loadApp({ name }) {
    if (window[name]) {
      return window[name];
    } else {
      throw Error(
        `Could not find global variable 'window["${name}"]'. Try running pnpm start -- 06-${name}`
      );
    }
  },
});

// Create a layout engine, which controls where in the DOM the
// microfrontends are placed
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

// Register our applications with single-spa
applications.forEach(registerApplication);

// Start up single-spa
start();
