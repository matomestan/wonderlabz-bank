# wonderlabz-bank
Create accounts(saving and current) for users. both account should allow the users to withdraw and deposit money, as well as keep the transaction history

*/ About the MakTransactio() */
The MakTranactions() function takes one argument amount and performs two actions: it calls the deposit() function with the amount argument, and then it calls the withdraw() function with an argument of $2000.

The function is then called with an argument of $10000, which means that the deposit() function will be called with an amount of $10000, and then the withdraw() function will be called with an amount of $2000.

The withdraw() function takes one argument, amount, and checks if the amount to withdraw exceeds the account limit (the sum of the account balance and the overdraft limit). If the amount exceeds the limit, the function logs an error message and returns without making any changes to the account. If the amount is within the limit, the function subtracts the amount from the account balance, adds a new transaction to the account's transaction history, and logs a success message with the new account balance


Hint: Please note that all functions and method will be clearly explained or commented line by line for better understanding of the code.