// 05 : CSS - component styles 에 집중
// micro-app 간 디자인시스템 공유, global-style 이랑 scoped-style

// CASE: 동일 이름, 다른 내용의 클래스를 각 micro-app 에서 global-css 에 선언하였다.
// -> 제일 나중에 로드된 앱의 css 로 전체가 적용될 것!
// -> 이렇게 하고 싶지 않다. micro-app 끼리는 완전히 독립적으로 css 를 사용해야 한다.
// -> global 로 css 를 만들지말고 scoped 로 만들어라!! 이방법바껜.,

import { registerApplication, start } from "single-spa";

if (!window.reactApp) {
  throw Error("Please run 05-react-app in a separate terminal tab");
}

if (!window.vueApp) {
  throw Error("Please run 05-vue-app in a separate terminal tab");
}

if (!window.angularApp) {
  throw Error("Please run 05-angular-app in a separate terminal tab");
}

registerApplication({
  name: "react-app",
  app: window.reactApp,
  activeWhen: ["/react"],
});

registerApplication({
  name: "vue-app",
  app: window.vueApp,
  activeWhen: ["/vue"],
});

registerApplication({
  name: "angular-app",
  app: window.angularApp,
  activeWhen: ["/angular"],
});

start();
