
class SavingsAccount {
    constructor() {
      this.balance = 0;
      this.transactionHistory = [];
    }
    openAccount(amount) {
        if (amount >= 1000) {
          this.balance = amount;
          this.transactionHistory.push(`Account opened with a deposit of R${amount.toFixed(2)}`);
          console.log("Account opening success.");
          console.log(this.transactionHistory[0]);
        } else {
          console.log("Account opening failed. Minimum deposit is R1,000.00.");
        }
      }
      withdraw(amount) {
        if (this.balance - amount >= 1000) {
          this.balance -= amount;
          this.transactionHistory.push(`Withdrawal of R${amount.toFixed(2)}`);
          console.log('My new balance is '+ this.balance);
         
        } else {
          console.log("Withdrawal failed. Minimum balance of R1,000.00 required");
        }
    }
    deposit(amount) {
      this.balance += amount;
      this.transactionHistory.push(`Deposit of R${amount.toFixed(2)}`);
      console.log('Latest new balance is: '+ this.balance);
     
    }
   
    MakeTransaction(amount){
       this.openAccount(amount);
       this.withdraw(100);
       this.deposit(1500);
    }
  }
  const myObj = new SavingsAccount();

  myObj.MakeTransaction(1100);
  myObj.withdraw(900);