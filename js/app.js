function getValue(money){
    const totalMoneyText = document.getElementById(money).value;
    const totalMoney = parseFloat(totalMoneyText);
    return totalMoney;
    
}

function setValue(name,amount){
    const totalCost = document.getElementById(name);
    totalCost.innerText = amount;
}


document.getElementById('calculate').addEventListener('click', function(){
    // calling function
    const income = getValue('income');
    const food = getValue('food');
    const rent = getValue('rent');
    const cloths = getValue('cloth');

    // calculating the amount
    const bill = food + rent + cloths;
    const newBalance = income - bill;



    // calling function
    if(bill > income){
        alert('your bill is more than your income');
    }else{
        setValue('total-cost', bill);
        setValue('rest-balance', newBalance);
    }
    
    

});

document.getElementById('save').addEventListener('click', function(){
    const saveAmount = getValue('save-money');
    const income = getValue('income');
    const saving = (income * saveAmount) / 100;
    const remainingBalanceText = document.getElementById('rest-balance').innerText;
    const remainingBalance = parseInt(remainingBalanceText);
    const finalAmount = remainingBalance - saving;
    const errorMessage = document.getElementById('not-matches');

    // setting value
    if(saving > remainingBalance){
        errorMessage.style.display = 'block';
    }else{
        setValue('saving', saving);
        setValue('remaining', finalAmount);
    }
    
    

});