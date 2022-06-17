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

export type ShopServiceForm = {
  name: string;
  description: string;
  sessionTime: string;
  rate: string;
};

export type ShopServiceFormError = {
  name: string;
  description: string;
  sessionTime: string;
  rate: string;
};
export type ShopLogin = {
  phone: string;
};

export type ShopLoginError = {
  phone: string;
};

export type OtpForm = {
  otp: string;
};

export type OtpFormError = {
  otp: string;
};
