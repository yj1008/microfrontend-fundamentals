import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  const linkStyle = {
    padding: "16px",
    display: "inline-block",
  };

  return (
      // react 에서 BrowserRouter 의 basename 은 / 여야하는데, 이것은 이게 root 가 아니고 micro-app 이여도 마찬가지로 동일하다.
      // 이 basename 이 / 가 아니면 작동하지 않는다.
      // micro-app 에서도 라우터주소는 / 부터 시작해서 적어야 함.
      // root 에서 micro-app 바인딩을 prefix 로 달은것과는 별개로 내부동작시 자동으로 붙지 않는다.
    <BrowserRouter basename="/">
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/react" style={linkStyle}>
        React
      </Link>
      <Link to="/vue" style={linkStyle}>
        Vue
      </Link>
      <Link to="/angular" style={linkStyle}>
        Angular
      </Link>
    </BrowserRouter>
  );
}
