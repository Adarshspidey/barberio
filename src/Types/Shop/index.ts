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
  pin:string;
};

export type ShopLoginError = {
  phone: string;
  pin:string;
};

export type OtpForm = {
  otp: string;
};

export type OtpFormError = {
  otp: string;
};

export type ServiceFormError = {
  name:string;
  description:string;
  sessionTime:number;
  rate:number;

};
