// 07 : Shared dependencies 의존성 공유
// --> system.js 로 할수있다
// network 탭에서 보면은 예를들어 vue 같은거를 각 프로젝트에서 각각 다운로드받는것이 아니라 한번만 받게함
// 성능 최적화의 목적이기 때문에 크기가 큰 파일들을 하면됨



import { registerApplication, start } from "single-spa";

registerApplication({
  name: "home",
  // app: window.home,
  // 더이상 글로벌변수를 직접 바인딩하지 않아도 된다. 참조만하면 됨.
  app: () => System.import("home"),
  activeWhen: ["/"],
});

registerApplication({
  name: "navbar",
  app: () => System.import("navbar"),
  activeWhen: ["/"],
});

start();
