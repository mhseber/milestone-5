document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        // console.log('add money inside addMoney2.JS', addMoney, pinNumber)

        if (isNaN(addMoney)) {
            alert('Failed to add money');
            return;
        }

        if (pinNumber === 1234) {
            const balance = getTextFieldValueId('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            //add to transaction history
            const p = document.createElement('p');
            p.innerText = `added: ${addMoney} TK. New balance: ${newBalance}`;
            console.log(p);

            //should be a common function
            document.getElementById('transaction-container').appendChild(p)
        }
        else {
            alert('Failed to add the money')
        }

    })