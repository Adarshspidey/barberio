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


export type ShopServiceForm ={
    name: string;
    description: string;
    time: string;
    rate:string;
}

export type ShopServiceFormError ={
    name: string;
    description: string;
    time: string;
    rate:string;
}
export type ShopLogin = {
  phone: string;
};

export type ShopLoginError = {
  phone: string;
};

