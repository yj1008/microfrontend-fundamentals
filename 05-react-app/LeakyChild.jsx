// global css 처럼 다루고 있다.
import "./LeakyChild.css";

export default function LeakyChild() {
  return (
    <p className="with-border">
      The LeakyChild component relies on global CSS which can collide with the
      CSS from other microfrontends.
    </p>
  );
}
