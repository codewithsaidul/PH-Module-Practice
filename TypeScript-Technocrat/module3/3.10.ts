{
    // Encapsulation -> OOP TypeScript
    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number; // Encapsulated

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // addDeposit (amount: number) {
        //     this._balance = this._balance + amount
        // }

        // setter oop
        set Deposit(amount: number) {
            this._balance = this._balance + amount
        }

        // getBalance () {
        //     console.log(this._balance)
        // }

        // getter oop
        get Balance () {
            return this._balance
        }
    }


    class Student extends BankAccount {
        isStudent: boolean
        constructor(id: number, name: string, balance: number, isStudent: boolean) {
            super(id, name, balance)
            this.isStudent = isStudent
        }
    }


    const std1 = new Student(123, "Student", 200, true)
    const goribAccount = new BankAccount(122, "Mr. Gorib", 2000)
    goribAccount.Deposit = 400
    std1.Deposit = 40

    console.log(goribAccount.Balance)
    console.log(std1.Balance)
}