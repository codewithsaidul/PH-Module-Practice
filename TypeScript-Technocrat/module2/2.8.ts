{
  // Asynchronous TypeScript

  interface User {
    id: string;
    name: string;
    emial: string;
    password: string;
    country: string;
    phone: string;
  }

  // create a new user
  const user = {
    id: "TR34",
    name: "Jakir Mia",
    emial: "jakir@gmail.com",
    password: "091246",
    country: "uganda",
    phone: "+98 9865738",
  };

  const createPromise = (msg: User | null): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      if (msg) {
        resolve(msg);
      } else {
        reject("error found");
      }
    });
  };

  const showPromise = async (): Promise<User> => {
    const myData: User = await createPromise(user);
    // console.log(myData);
    return myData;
  };

  showPromise();


//   json place holder 
interface FetchUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lang: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    }
}

  const fetchUser = async (): Promise<FetchUser> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data: FetchUser = await response.json()
    console.log(data)
    return data
  }

  fetchUser()
}
