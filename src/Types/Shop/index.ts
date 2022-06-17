export type ShopRegister = {
  name: string;
  phone: string;
  registerNumber: string;
  ownerName: string;
};

export type ShopRegisterError = {
  name: string;
  phone: string;
  registerNumber: string;
  ownerName: string;
};

export type ShopLogin = {
  phone: string;
};

export type ShopLoginError = {
  phone: string;
};
