import { Address } from "./address";

type User = {
  name: string;
  id: string;
  email: string;
  password: string;
  address?: Address;
};

export default User;

// 회원가입 화면에서 사용자의 입력 정보를 받고 그 데이터를 객체화한 type을 정의
