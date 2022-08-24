import singleSpaReact from "single-spa-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./Root";

// 02와 다른점 : html 파일이 없다 -> root-config 의 html 에 combined 될거기 때문

// 여기서 global app 변수를 선언했다.
window.reactApp = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});
