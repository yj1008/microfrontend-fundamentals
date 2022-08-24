// 이것도 다른 micro-app 에서 온거다
// 어디서 온지 어떻게 알까?
// 어디서 주는거지?
// public interface
// -> 메인 파일!
import { getNavHeightPx } from "navbar";

export default function Root() {
  // Wrong: Not below the navbar
  // return <h1>React settings page</h1>

  // Correct: Below the navbar
  // Example use of cross-microfrontend imports
  return (
    <h1 style={{ marginTop: getNavHeightPx() + "px" }}>React settings page</h1>
  );
}
