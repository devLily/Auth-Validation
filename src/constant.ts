import { ValidateRule } from "./types";

export const RequireRule: ValidateRule = {
  rule: /.+/,
  match: true,
  message: "필수 입력 항목입니다.",
};

export const ExcludeBlankSpace: ValidateRule = {
  rule: /\s/,
  match: false,
  message: "입력란에 공백을 포함할 수 없습니다.",
};

export const ExcludeStartNumber: ValidateRule = {
  rule: /^\d/,
  match: false,
  message: "아이디는 숫자로 시작할 수 없습니다.",
};

export const LimitInputCharacter = (limit: number): ValidateRule => ({
  rule: new RegExp(`(.){${limit}}`),
  match: true,
  message: `입력은 최소 ${limit} 자 이상입니다.`,
});
