// 08: 컴포넌트,로직,state 공유
// 언어가 달라도 공유하고 싶다

// 1. 자바스크립트 변수 공유 (컴포넌트, 로직)
// 2. 데이터 공유 - vuex, redux, rsjx 등등 아무거나 써도 됨. key는 cross micro-frontends import
//    -> 근데 vuex 에 있는걸 어떻게 공유하지? 이게 문제네..

import { pathToActiveWhen, registerApplication, start } from "single-spa";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

registerApplication({
  name: "home",
  app: () => System.import("home"),
  activeWhen: pathToActiveWhen("/", true),
});

registerApplication({
  name: "navbar",
  app: () => System.import("navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "settings",
  app: () => System.import("settings"),
  activeWhen: ["/settings"],
});

start();
