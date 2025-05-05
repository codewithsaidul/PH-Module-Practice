{
  // conditional types in typescript

  type a = number;
  type b = string;

  // conditionaly checking
  type c = a extends null ? "Its Null" : "Its not null";

  // nested type checking
  type d = a extends null
    ? "yeah im null"
    : b extends undefined
    ? "yeah im undefined"
    : "Im not null or undefined";

  type Sheikh = {
    bike: string;
    car: string;
    helicopter: string;
  };

  type checkVechicle<T> = T extends keyof Sheikh ? true : false;

  type hasBike = checkVechicle<"train">;
}
