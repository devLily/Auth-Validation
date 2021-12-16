// 특정한 타입이 아닌 여러 곳에서 공통적으로 사용할 만한 type 정의
export type AnyObject = {
  [key: string]: any;
};

export type ValidateRule = {
  rule: RegExp;
  match: boolean;
  message: string;
};
