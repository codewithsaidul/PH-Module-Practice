{
  // Generics Type with Interface
  interface Developer<T, B> {
    name: string;
    role: string;
    computer: {
      brand: string;
      model: string;
      year: number;
    };
    watch: T;
    bike: B;
  }

  interface Watch {
    isSmart: boolean;
    brand: string;
    model: string;
    color: string;
    features?: {
      heartTracking?: boolean;
      sleepTracking?: boolean;
      walkTracking?: boolean;
    };
  }

  interface Bike {
    isHaveBike: boolean;
    brand?: string;
    model?: string;
    engineCapacity?: string;
    color?: string;
  }

  const poorDeveloper: Developer<Watch, Bike> = {
    name: "Saidul",
    role: "Front-End Developer",
    computer: {
      brand: "HP",
      model: "EliteBook 840 G6",
      year: 2019,
    },
    watch: {
      isSmart: false,
      brand: "Oral M",
      model: "KW33",
      color: "Black",
    },
    bike: {
      isHaveBike: false,
    },
  };

  const richDeveloper: Developer<Watch, Bike> = {
    name: "Jhankar",
    role: "Software Engineer",
    computer: {
      brand: "Apple",
      model: "MacBook M4 Pro",
      year: 2025,
    },
    watch: {
      isSmart: true,
      brand: "Apple Watch",
      model: "Apple M2 Watch",
      color: "White",
      features: {
        heartTracking: true,
        sleepTracking: true,
        walkTracking: true,
      },
    },
    bike: {
      isHaveBike: true,
      brand: "Kawashaki",
      model: "Ninja H2R",
      engineCapacity: "988CC",
      color: "Olive Green",
    },
  };
}
