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
