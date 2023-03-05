
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
    }