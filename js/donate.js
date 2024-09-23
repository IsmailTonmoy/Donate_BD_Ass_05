//Donate for Flood at Noakhali

document.getElementById('donate')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amount');
    const nDonate = getTextValueById('n-donate');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donate').innerText = noaDonate;

    const donationT = getTextValueById('total-donation');
    const totalDonation = addDonateM + donationT;
    document.getElementById('total-donation').innerText = totalDonation;

    




    // const addMoney = document.getElementById('donate-amount').value;
    // const addMoneyNumber = parseFloat(addMoney);
    // const nDonate = document.getElementById('n-donate').innerText;
    // const nDonateN = parseFloat(nDonate);
    // const noaDonate = addMoneyNumber + nDonateN

    // document.getElementById('n-donate').innerText = noaDonate;

    // const tDonation = document.getElementById('total-donation').innerText;
    // const ntDonation = parseFloat(tDonation);

    // const totalDo = addMoneyNumber + ntDonation;

    // document.getElementById('total-donation').innerText = totalDo;


    
})


//Donate for Flood Relief in Feni

document.getElementById('donatef')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amountf');
    const nDonate = getTextValueById('n-donatef');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donatef').innerText = noaDonate;

    const donationT = getTextValueById('total-donation');
    const totalDonation = addDonateM + donationT;
    document.getElementById('total-donation').innerText = totalDonation;

})


//Aid for Injured in the Quota Movement

document.getElementById('donate-q')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amount-q');
    const nDonate = getTextValueById('n-donate-q');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donate-q').innerText = noaDonate;

    const donationT = getTextValueById('total-donation');
    const totalDonation = addDonateM + donationT;
    document.getElementById('total-donation').innerText = totalDonation;

})

    
