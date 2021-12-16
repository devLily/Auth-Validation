import template from "./app.template";
import {
  ExcludeBlankSpace,
  ExcludeStartNumber,
  LimitInputCharacter,
} from "./constant";
import { AnyObject } from "./types";
import { TextField, PasswordField, AddressField } from "./views";

export default class App {
  template = template;
  data: AnyObject;
  container: HTMLElement;
  fields: AnyObject[];
  active: boolean = false;

  constructor(container: string, data: AnyObject = {}) {
    this.container = document.querySelector(container) as HTMLElement;
    this.data = data;
    this.fields = [];

    this.initialize();

    setInterval(this.validFieldMonitor, 1000 / 30);
  }

  private initialize = () => {
    const nameField = new TextField("#required-fields", {
      id: "name",
      label: "이름",
      type: "text",
      placeholder: "이름을 입력해주세요",
      require: true,
    });
    const idField = new TextField("#required-fields", {
      id: "id",
      label: "아이디",
      type: "text",
      placeholder: "아이디를 입력해주세요",
      require: true,
    });
    const emailField = new TextField("#required-fields", {
      id: "email",
      label: "이메일",
      type: "email",
      placeholder: "이메일을 입력해주세요",
      require: true,
    });
    const passwordField = new PasswordField("#required-fields", {
      id: "password",
      label: "비밀번호",
      placeholder: "비밀번호를 입력해주세요",
    });
    const addressField = new AddressField("#required-fields", {
      id: "address",
      label: "배송지 주소",
    });

    idField.addValidateRule(ExcludeBlankSpace);
    idField.addValidateRule(ExcludeStartNumber);
    idField.addValidateRule(LimitInputCharacter(3));

    emailField.addValidateRule(ExcludeBlankSpace);

    this.fields.push(nameField);
    this.fields.push(idField);
    this.fields.push(emailField);
    this.fields.push(passwordField);
    this.fields.push(addressField);
  };

  private validFieldMonitor = () => {
    const signupBtn = this.container.querySelector(
      "#btn-join"
    ) as HTMLButtonElement;

    if (
      this.fields.filter((field) => field.isValid).length === this.fields.length
    ) {
      this.active = true;
      signupBtn.classList.remove("bg-gray-300");
      signupBtn.classList.add("bg-green-500");
    } else {
      this.active = false;
      signupBtn.classList.remove("bg-green-500");
      signupBtn.classList.add("bg-gray-300");
    }
  };

  private onSubmit = (e: Event) => {
    e.preventDefault();

    if (!this.active) return;

    const submitData: AnyObject = this.fields
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((a, b) => ({ ...a, ...b }), {});

    console.log("submitData", submitData);
  };

  public render = () => {
    this.container.innerHTML = this.template(this.data);
    this.fields.forEach((field) => {
      field.render(true);
    });

    this.container.addEventListener("submit", this.onSubmit);
  };
}

// template을 갖고 있는 view class들은 모두 같은 방식으로 작동되도록 설계
