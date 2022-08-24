// 04 : Routing

// micro-frontend 세계에서는 두종류의 라우팅이 있다
// 1. top-level-route : url 에 따라 어떤 micro-app 이 active 할건지 제어
//    -> single-spa devtools 에서 확인가능
// 2. application-level-route : subroutes 나 nested routes 에 따라 해당 micro-app의 어떤 컴포넌트가 active 할건지 제어

// 각 micro-app 에서 해야될 3가지
// 1. 라우터 정의
// 2. mf 내부 연결 (linking within the mf)
// 3. mf 간의 연결 (linking between mf)

import { registerApplication, start } from "single-spa";

if (!window.reactNavbar) {
  throw Error("Please run 04-react-navbar in a separate terminal tab");
}

if (!window.reactApp) {
  throw Error("Please run 04-react-app in a separate terminal tab");
}

if (!window.vueApp) {
  throw Error("Please run 04-vue-app in a separate terminal tab");
}

if (!window.angularApp) {
  throw Error("Please run 04-angular-app in a separate terminal tab");
}

// top-level-routes
// prefix 에 따라 어떤 micro-app 이 활성화되어야 하는지를 결정
// 브라우저 콘솔에서 특정 url 로 이동하고 싶을 때
// singleSpaNavigate('/vue')
// singleSpaNavigate('/vue/subroute')
// 혹은
// const singleSpa = await System.import('single-spa')
// singleSpa.navigateToUrl('/vue/subroute')

registerApplication({
  name: "react-navbar",
  app: window.reactNavbar,
  // 항상 활성화
  activeWhen: ["/"],
});

registerApplication({
  name: "react-app",
  app: window.reactApp,
  // url이 /react 일때 활성화
  activeWhen: ["/react"],
});

registerApplication({
  name: "vue-app",
  app: window.vueApp,
  // url이 /vue 일때 활성화
  activeWhen: ["/vue"],
});

registerApplication({
  name: "angular-app",
  app: window.angularApp,
  // url이 /angular 일때 활성화
  activeWhen: ["/angular"],
});

start();
