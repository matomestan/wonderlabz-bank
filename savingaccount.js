// Define a class named `SavingsAccount`.
class SavingsAccount {
  // Define the constructor method for the `SavingsAccount` class.
    constructor() {
      // Set the initial balance of the savings account to 0.
      this.balance = 0;
      // Set the initial transaction history of the savings account to an empty array.
      this.transactionHistory = [];
    }
    // Define a function named `openAccount` that takes one argument, `amount`.
    openAccount(amount) {

      // Check if the opening deposit meets the minimum requirement of R1,000.00.
        if (amount >= 1000) {
          // If the deposit meets the minimum requirement, set the account balance to the deposit amount

          this.balance = amount;
          // Add a new transaction to the account's transaction history.
          this.transactionHistory.push(`Account opened with a deposit of R${amount.toFixed(2)}`);

          // Log a success message with the new transaction history.
          console.log("Account opening success.");
          console.log(this.transactionHistory[0]);
        } else {
          // If the deposit does not meet the minimum requirement, log an error message.
          console.log("Account opening failed. Minimum deposit is R1,000.00.");
        }
      }
      // Define a function named `withdraw` that takes one argument, `amount`.
      withdraw(amount) {
        // Check if the account has enough balance after withdrawal to keep the minimum required balance of R1,000.00.
        if (this.balance - amount >= 1000) {

          // If the account has enough balance after withdrawal, deduct the withdrawal amount from the account balance.
          this.balance -= amount;

          // Add a new transaction to the account's transaction history.
          this.transactionHistory.push(`Withdrawal of R${amount.toFixed(2)}`);

          // Log the new balance after withdrawal.
          console.log('My new balance is '+ this.balance);
         
        } else {
          // If the account does not have enough balance after withdrawal, log an error message.
          console.log("Withdrawal failed. Minimum balance of R1,000.00 required");
        }
    }
    // Define a function named `deposit` that takes one argument, `amount`.
    deposit(amount) {

      // Add the deposit amount to the account balance.
      this.balance += amount;

      // Add a new transaction to the account's transaction history
      this.transactionHistory.push(`Deposit of R${amount.toFixed(2)}`);

      // Log the new balance after deposit.
      console.log('Latest new balance is: '+ this.balance);
     
    }
   // Define a function named `MakeTransaction` that takes one argument, `amount`.
    MakeTransaction(amount){

      // Call the `openAccount` method of the object that `this` refers to with the `amount` argument.
       this.openAccount(amount);

       // Call the `withdraw` method of the object that `this` refers to with the withdrawal amount of 100.
       this.withdraw(100);

       // Call the `deposit` method of the object that `this` refers to with the deposit amount of 1500.
       this.deposit(1500);
    }
  }
  // Create a new instance of the `SavingsAccount` class and assign it to a variable named `myObj`.
  const myObj = new SavingsAccount();

  // Call the `MakeTransaction` method of the `myObj` instance with the argument of 1100.
  myObj.MakeTransaction(1100);

  // Call the `withdraw` method of the `myObj` instance with the argument of 900.
  myObj.withdraw(900);