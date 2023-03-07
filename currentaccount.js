/* Create an object named `currentAccount` with a balance of 0, an overdraft limit of 100000, 
and an empty array named `transactionHistory`.*/
let currentAccount = {
    balance: 0,
    overdraftLimit: 100000,
    transactionHistory: []
  };
  // Define a function named `withdraw` that takes one argument, `amount`.
  function withdraw(amount) {

    // Check if the amount to withdraw exceeds the account limit.
    if (amount > (currentAccount.balance + currentAccount.overdraftLimit)) {
      // If the amount exceeds the account limit, log an error message and return.
      console.log('Withdrawal amount exceeds account limit.');
      return;
    }
    function withdraw(amount) {
      // Check if the amount to withdraw exceeds the account limit.
      if (amount > (currentAccount.balance + currentAccount.overdraftLimit)) {

        // If the amount exceeds the account limit, log an error message and return.
        console.log('Withdrawal amount exceeds account limit.');
        return;
      }
      // If the amount is within the account limit, subtract the amount from the account balance.
      currentAccount.balance -= amount;

      // Add a new transaction to the account's transaction history.
      currentAccount.transactionHistory.push(`Withdrawal of ${amount}`);

      // Log a success message with the new account balance.
      console.log(`Withdrawal of R${amount} successful. Current balance: R${currentAccount.balance}`);
    }

    function deposit(amount) {
      // Add the deposit amount to the account balance.
      currentAccount.balance += amount;

      // Add a new transaction to the account's transaction history.
      currentAccount.transactionHistory.push(`Deposit of ${amount}`);

      // Log a success message with the new account balance.
      console.log(`Deposit of R${amount} successful. Current balance: R${currentAccount.balance}`);
    }
    function MakTranactions(amount){
      // Call the `deposit()` function and pass in the `amount` argument.
      deposit(amount);

      // Call the `withdraw()` function and withdraw $2000
      withdraw(2000);
     
  }
  // Call the `MakTranactions()` function and pass in an amount of $10000.
  MakTranactions(10000);
}