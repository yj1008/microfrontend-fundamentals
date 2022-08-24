import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

// 02와 다른점 : html 파일이 없다 -> root-config 의 html 에 combined 될거기 때문

// 여기서 global app 변수를 선언했다.
window.vueApp = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(Root, {
        props: {
          name: this.name,
        },
      });
    },
  },
});
