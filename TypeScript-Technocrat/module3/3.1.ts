{
  // OOP -> Class & Object

  interface CarType {
    company: string;
    model: string;
    color: string;
    year: number;
    driver: string;
  }

  class Car {
    // public company: string;
    // public model: string;
    // public color: string;
    // public year: number;
    // public driver: string

    // parameter properties
    constructor(
      public company: string,
      public model: string,
      public color: string,
      public year: number,
      public driver: string
    ) {
      //   (this.company = company),
      //     (this.model = model),
      //     (this.color = color),
      //     (this.year = year),
      //     (this.driver = driver);
    }

    startCar() {
      console.log(
        `${this.driver} has started driving a ${this.company} ${this.model}`
      );
    }
    stopCar() {
      console.log(
        `${this.driver} has stoped driving a ${this.company} ${this.model}`
      );
    }
  }

  const toyata = new Car("Toyata", "A1", "Olive Grenn", 2010, "Khalek Hossen");

  const bmw = new Car("BMW", "BM64", "lighter orange", 2017, "Hasmat Ali");

  toyata.startCar();
  bmw.stopCar();
}
