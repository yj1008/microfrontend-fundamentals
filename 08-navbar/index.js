// 이 프로젝트의 메인파일은 여기다

import Vue from "vue";
import VueRouter from "vue-router";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

const app = singleSpaVue({
  Vue,
  appOptions: {
    router: new VueRouter({
      mode: "history",
      routes: [],
    }),
    render(h) {
      return h(Root, {
        props: {
          authToken: this.authToken,
        },
      });
    },
  },
});


// 몇가지를 export 하구 있다
// 여기서 export 하는게 public interface 가 될거다
// 확인 방법 : 브라우저 콘솔에서 await System.import('navbar') 하면 뜨는게 public interface 들
export const { bootstrap, mount, unmount, update } = app;

export { getNavHeightPx } from "./Root.vue";

export { default as BelowNav } from "./BelowNav.vue";

export { default as SingleSpaWorkshopLogo } from "./SingleSpaWorkshopLogo.vue";
