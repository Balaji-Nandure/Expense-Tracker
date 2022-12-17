/** @format */

const transactionFormEl = document.getElementById("transactionForm");

const state = {
    earnings: 0,
    expenses: 0,
    net: 0,
    transactions: [],
};

const renderTransactions = () => {
    const transactionsContainerEl =
        document.getElementsByClassName("transactions");
    const netAmountEl = document.getElementById("netAmount");
    const earningEl = document.getElementById("earning");
    const expenseEl = document.getElementById("expense");

    const transactions = state.transactions;
    transactionsContainerEl.innerHTML = "";

    let earning = 0;
    let expense = 0;
    let net = 0;

    transactions.forEach((transaction) => {
        const { id, text, amount, type } = transaction;
        const isCredit = type === "credit" ? true : false;
        const sign = isCredit ? "+" : "-";

        let transactionEl = `
        <div class="transaction" id="${id}"> 
            <div class="left">
                <p>${text}</p>
                <p>${sign} ${amount}</p>
            </div>
            <div class="status ${isCredit ? "credit" : "debit"}">${
            isCredit ? "C" : "D"
        }</div>
        </div>`;

        earning += isCredit ? amount : 0;
        expense += isCredit ? 0 : amount;
        net = earning - expense;

        transactionsContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
    });

    netAmountEl.innerText = `${net}`;
    earningEl.innerText = `${earning}`;
    expenseEl.innerText = `${expense}`;
};

const addTransaction = (e) => {
    e.preventDefault();

    const isEarn = e.submitter.id === earnBtn ? true : false;

    const formData = new FormData(transactionFormEl);
    const tData = {};

    formData.forEach((value, key) => {
        tData[key] = value;
    });

    // console.log(tData);

    const { text, amount } = tData;

    const transaction = {
        id: Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount,
        type: isEarn ? "credit" : "debit",
    };

    state.transactions.push(transaction);

    renderTransactions();
};

transactionFormEl.addEventListener("submit", addTransaction);
