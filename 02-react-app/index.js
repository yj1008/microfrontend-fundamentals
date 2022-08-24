import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { registerApplication, start } from "single-spa";
import Root from "./Root";

// 더이상 lifecycle function 을 직접 쓰지 않아도 됨 singleSpaReact 라는 function이 다 해줌
const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter(){
    return document.getElementById("different-container")
  }
});

registerApplication({
  name: "react-app",
  app,
  activeWhen: ["/"],
  // 리액트는 여기서 넘기기만하면 바로 됨
  customProps: {
    authToken: "sfdyfs90987sd9sd9f0sd-9fsdfsd",
  },
});

start();
