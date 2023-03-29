var pin = 2345;
var accountNumber = 2086803843;
var bank = 'bank Chioma';
var name = 'David';
var balance = 30000000;

function transactionActivity(transactionType) {
  var amount = prompt(' how much would you like to ' + transactionType);
  var  newBalance = balance - amount;
  alert(newBalance);

  
}

alert('welcome to Gtbank, ' + name);
var enterPin = prompt('please enter your pin');
if (pin == enterPin){
  var transactionActivity = prompt(' press A. Withdraw B. Transfer C. Deposit D. Quick Teller E. Buy Airtime F. Cancel');
  if (transactionActivity.toUpperCase() == 'A'){
    transactionActivity('Withdraw');
  }
  else if (transactionActivity.toUpperCase() == 'B'){
    transactionActivity('transfer')
  }

}
else {
  alert('incorrect pin, please join the winning bank')
}

