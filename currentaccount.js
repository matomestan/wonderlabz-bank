
let currentAccount = {
    balance: 0,
    overdraftLimit: 100000,
    transactionHistory: []
  };
  function withdraw(amount) {
    if (amount > (currentAccount.balance + currentAccount.overdraftLimit)) {
      console.log('Withdrawal amount exceeds account limit.');
      return;
    }
    function withdraw(amount) {
      if (amount > (currentAccount.balance + currentAccount.overdraftLimit)) {
        console.log('Withdrawal amount exceeds account limit.');
        return;
      }
      currentAccount.balance -= amount;
      currentAccount.transactionHistory.push(`Withdrawal of ${amount}`);
      console.log(`Withdrawal of R${amount} successful. Current balance: R${currentAccount.balance}`);
    }}