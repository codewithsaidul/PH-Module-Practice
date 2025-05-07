{
  // TODO: Task 1: Basic Data Types and First Program
  const nextLevel: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  console.log(nextLevel);

  // TODO: Task 2: Functions, Optional, and Literal Types
  const funcUser = (value: {
    name: string;
    age: number;
    role: "Admin" | "User" | "Guest";
  }) => {
    const data = value;
    return data;
  };

  // TODO: Task 3: Object Types, Type Alias, & Literal Types
  type SingleUser = {
    name: string;
    address: string;
    HairColor: string;
    EyeColor: string;
    Income: number;
    Expense: number;
    Hobbies: string[];
    FamilyMembers: number;
    Job: string;
    Skills: string[];
    MaritalStatus: string;
    Friends: string[];
  };

  const user: SingleUser = {
    name: "Hasan",
    address: "Uganda",
    HairColor: "Brown",
    EyeColor: "Blue",
    Income: 50000,
    Expense: 47800,
    Hobbies: ["Reading Books", "Gardening"],
    FamilyMembers: 5,
    Job: "Junior Web Developer at XYZ Compnay",
    Skills: ["React", "Next", "Typescript"],
    MaritalStatus: "Unmarid",
    Friends: ["Josna", "alex"],
  };

  // TODO: Task 4: Union and Intersection Types
  type Book = {
    name: string;
    price: number;
    author: string;
    releaseYear: number;
  };

  type Magazine = {
    name: string;
    title: string;
    author: string;
    releaseYear: number;
  };

  // Union Types
  type BookMagazineUnion = Book | Magazine;

  // Intersection Types
  type BookMagazineIntersection = Book & Magazine;

  // TODO: Task 5: Function Type
  const reverseString = (str: string): string => {
    const arrString: string[] = str.split("");
    const reversedArry: string[] = arrString.reverse();
    return reversedArry.join("");
  };

  // TODO: Task 6: Spread and Rest Operators, Destructuring

  const restOp = (...rest: number[]): number => {
    return rest.reduce((prev: number, curr: number) => prev + curr, 0);
  };

  // TODO: Task 7: Type Assertion and Narrowing

  const typeAssNarr = (val: string | number): number => {
    if (typeof val === "string") {
      return val.length;
    }

    return val * val;
  };

  const sqr = typeAssNarr("hello");

  // TODO: Task 8: Interface Types
  interface User {
    name: string;
    email: string;
  }

  interface Admin {
    adminLevel: number;
  }

  interface AdminUser extends User, Admin {}

  const describeAdmin = (user: AdminUser) => {
    return `Admin ${user.name} (${user.email}) is level ${user.adminLevel}`;
  };

  // TODO: Task 9: Optional Chaining
  interface Emp {
    name: string;
    address: {
      street: string;
      city?: string;
      zip: string;
    };
    department: {
      name: string;
      location: {
        city: string;
      };
    };
  }
  const employee: Emp = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
    },
    department: {
      name: "Engineering",
      location: {
        city: "San Francisco",
      },
    },
  };

  const empCity = employee?.address?.city;

  // TODO: Task 10: Nullish Coalescing
  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous"
  }


  // TODO: Task 11: Unknown Type

  const processData = (data: unknown): string | number | undefined => {
    if (typeof data === "string") {
      return data.toUpperCase()
    } else if (typeof data === "number") {
      return data * data
    }
    return undefined
  }


  // TODO: Task 12: Never Type
  const handleError = (msg: string): never => {
    throw new Error(msg)
  }

}
