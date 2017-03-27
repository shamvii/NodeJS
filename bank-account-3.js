var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) {
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}

function deposit (account, amount) {
	if (typeof amount === 'number') {
		account.balance += amount;
	} else {
		console.log('deposit failed. amount is not a number.');
	}
}

function withdraw (account, amount) {
	if (typeof amount === 'number') {
		account.balance -= amount;
	} else {
		console.log('withdraw failed. amount is not a number.')
	}
}

function getBalance (account) {
	return account.balance;
}

function createBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}

var shamvi = createAccount({
	username: 'shamvi',
	balance: 0
});

deposit(shamvi, 120);
withdraw(shamvi, 'my string');

var shamvi2 = getAccount('shamvi');
var getShamvi2Balance = createBalanceGetter(shamvi2);

console.log(getShamvi2Balance());























