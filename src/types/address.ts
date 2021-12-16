// 주소와 관련된 type 선언
export type Address = {
  zip: string;
  address1: string;
  address2: string | "";
};

// Daum의 주소 검색 서비스가 전달해주는 데이터 type
export type DaumAddress = {
  address: string;
  autoJibunAddress: string;
  roadAddress: string;
  sigunguCode: string;
};
