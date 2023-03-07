
let currentAccount = {
    balance: 0,
    overdraftLimit: 100000,
    transactionHistory: []
  };
  function withdraw(amount) {
    if (amount > (currentAccount.balance + currentAccount.overdraftLimit)) {
      console.log('Withdrawal amount exceeds account limit.');
      return;
    }}