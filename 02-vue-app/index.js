import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { registerApplication, start } from "single-spa";
import Root from "./Root.vue";

const app = singleSpaVue({
  Vue,
  appOptions: {
    el: '#different-container',
    render(h) {
      return h(Root, {
        props: {
          // vue는 render 함수에서 this 로 props 접근가능
          authToken: this.authToken,
        },
      });
    },
  },
});

registerApplication({
  name: "vue-app",
  app,
  activeWhen: ["/"],
  customProps: {
    authToken: "safd787sd90d87s90sdf8fs0d9",
  },
});

start();
