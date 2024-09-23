document.getElementById('donate')
.addEventListener('click', function (event){
    event.preventDefault();

    const addMoney = document.getElementById('donate-amount').value;
    const addMoneyNumber = parseFloat(addMoney);
    const nDonate = document.getElementById('n-donate').innerText;
    const nDonateN = parseFloat(nDonate);
    const noaDonate = addMoneyNumber + nDonateN

    document.getElementById('n-donate').innerText = noaDonate;

    const tDonation = document.getElementById('total-donation').innerText;
    const ntDonation = parseFloat(tDonation);

    const totalDo = addMoneyNumber + ntDonation;

    document.getElementById('total-donation').innerText = totalDo;


    
})
    
