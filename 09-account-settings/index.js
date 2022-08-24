// 09 : Local Development
// 1. intergrated mode
//    배포된 개발서버에서 작업하고자하는 micro-app 만 localhost 로 URL을 Override 한다.
//    -> ImportMap Overrides (화면 우측 하단 {...} 버튼)
//    변경하고자하는 URL을 default URL (배포된 URL) 에서 localhost 의 URL 로 변경
//    -> 변경하려는 URL 은 우선 로컬서버를 구동한뒤 뜨는 호스트주소랑 main.js 파일이다.
//    ex) http://127.0.0.1:8080/main.js
//    -> 바꾸고 잘 됐는지 확인하려면
//      - 주소 쳐보면 된다. 머가 나오면 됨.
//      - 소스 바꿔보기.
//      - network 탭에서 js 를 호출한 주소가 localhost인지 체크.
//      - 브라우저 콘솔에 System.resolve('모듈명')
//    - 핑크: 문제
//    - 베이지: ok
// 2. standalone
//    127.0.0.1이 아니라 localhost 로 치기
//
// 근데 intergrated mode 로 하길 추천
// intergrated mode 로 배포되기 때문이다. css 등등


import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./Root";

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    return "Settings error";
  },
});

export const { bootstrap, mount, unmount } = app;
