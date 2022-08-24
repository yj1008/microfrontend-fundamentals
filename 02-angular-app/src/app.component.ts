import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Subscription } from "rxjs";
import { CustomProps } from "single-spa";
// index에서 요렇게 가져옴
import { singleSpaPropsSubject } from "../index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  authToken: string;
  subscription: Subscription;

  ngOnInit() {
    // 여긴 없지만 distroyed 될때 unsubscribe 하믄됨
    this.subscription = singleSpaPropsSubject.subscribe(
      (props: CustomProps) => {
        this.authToken = props.authToken;
      }
    );
  }
}
