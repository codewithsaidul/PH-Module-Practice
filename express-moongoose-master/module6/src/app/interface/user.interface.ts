import { Model } from "mongoose";

export interface IAddress {
    street: string;
    city: string;
    country: string;
    zip: number;
}

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  address: IAddress
}


export interface UserInstanceMethod {
  hashPassword(password: string): string
}



export interface UserStaticMethod extends Model<IUser> {
  hashPassword(password: string): string
}