import { type } from "os";

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

export type ShopLocation = {
  address: string;
  location:{
    latitude: number;
    longitude: number;
  }
};

export type ShopLocationError = {
  address: string;
  location:{
    latitude: number;
    longitude: number;
  }
};


export type ShopInterval= {
  address: string;
  location:{
    latitude: number;
    longitude: number;
  }
};

export type ShopIntervalError = {
  address: string;
  location:{
    lattitude: number;
    longitude: number;
  }
};

export type ShopSheduleday ={
  startTime: number,
  endTime: number
}

export type ShopSheduledayError ={
  startTime: number,
  endTime: number
}
