/** @format */

const transactionFormEl = document.getElementById("transactionForm");

const state = {
    earnings: 0,
    expenses: 0,
    net: 0,
    transactions: [
        {
            id: 5,
            text: "demo credit",
            amount: 500,
            type: "credit",
        },

        {
            id: 4,
            text: "demo debit",
            amount: 400,
            type: "debit",
        },
    ],
};

const addTransaction = (e) => {
    e.preventDefault();

    const isEarn = e.submitter.id === earnBtn ? true : false;

    const formData = new FormData(transactionFormEl);
    const tData = {};

    formData.forEach((value, key) => {
        tData[key] = value;
    });

    console.log(tData);
};

transactionFormEl.addEventListener("submit", addTransaction);
