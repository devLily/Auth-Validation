// 앱의 진입점이자 시작 소스 파일
import { AnyObject } from "./types";
import App from "./app"; //app.ts

//global 영역에 있는 object를 정의
// handlebars와 daum Api 를 사용중이므로 정의해 준다.
declare global {
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string;
    };
    daum: any;
  }
}

// class app 인스턴스 생성 후 render 메서드 호출
const app = new App("#root", {
  title: "Javascript & TypeScript - Auth Validation",
});

app.render();
