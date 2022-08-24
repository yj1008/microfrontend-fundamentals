// shared 와 아닌거가 참조하는 부분에서는 다른 점이 없다.
// 그냥 webpack 설정에서만 빼면 됨
// -> 의존성 공유를 수정한다고 해도 소스를 다 수정할 필요가 없다.
import Vue from "vue"; // shared (importmap)
import singleSpaVue from "single-spa-vue"; // not shared
import Root from "./Root.vue"; // not shared

const app = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(Root, {
        props: {
          authToken: this.authToken,
        },
      });
    },
  },
});

// 글로벌 변수 선언은 더이상 필요없고
// window.home = app;
// export 만하면 됨
// 이 메서드들은 single-spa lifecycle 매서드
export const { bootstrap, mount, unmount, update } = app;
