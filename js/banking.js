document.getElementById('deposit-button').addEventListener('click', function(){

    //deposit process

    const depositInputAmount = document.getElementById('deposit-input');
    const newDepositInputAmountValueText = depositInputAmount.value;
    const newDepositInputAmountValue = parseFloat(newDepositInputAmountValueText);

    const depositTotalAmount = document.getElementById('deposit-total');
    const preDepositAmountText = depositTotalAmount.innerText;
    const preDepositAmount = parseFloat(preDepositAmountText);

    const newDepositAmount = preDepositAmount + newDepositInputAmountValue;
    depositTotalAmount.innerText = newDepositInputAmountValue + preDepositAmount;
    
    //update balance process

    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + newDepositInputAmountValue;
    balanceTotal.innerText = newBalanceTotal;

    //clear
    depositInputAmount.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValueText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputValueText);

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = previousWithdraw.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmount + withdrawInputAmount;

    previousWithdraw.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
})