import { registerApplication, start } from "single-spa";

// 초기화
// validation, errors 처리
if (!window.reactApp) {
  throw Error("Please run 03-react-app in a separate terminal tab");
}

if (!window.vueApp) {
  throw Error("Please run 03-vue-app in a separate terminal tab");
}

// 각 micro-app 들을 등록해준다.
// 이전 예제에서는 잘못됐다. --> 왜냐면 등록을 각각의 프로젝트에서 해줬기때문에
// 이제부터는 root 에서 등록해줄거다.
registerApplication({
  name: "react-app",
  // 앱이 global 변수로 선언이 되어 사용되고 있는데, 별로인 코드고 잘못된 거지만 그냥 편하기 때문에 여기 예제에서는 사용했다.
  // 어디에서 생성되어 선언이 되었을까? --> 정답은 각각의 프로젝트에서!
  app: window.reactApp,
  activeWhen: ["/"],
});

registerApplication({
  name: "vue-app",
  app: window.vueApp,
  activeWhen: ["/"],
});

start();
