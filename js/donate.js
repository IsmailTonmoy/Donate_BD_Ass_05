//Donate for Flood at Noakhali

document.getElementById('donate')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amount');
    if(isNaN(addDonateM)|| addDonateM <= 0){
        alert('Failed to add money');
        return;
    }

    

    const nDonate = getTextValueById('n-donate');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donate').innerText = noaDonate + 'BDT';
        
    const donationT = getTextValueById('total-donation');
    const totalDonation = addDonateM + donationT;
    document.getElementById('total-donation').innerText = totalDonation + 'BDT';
    

    
//add history
const p = document.createElement('p');
p.innerText = `${noaDonate} Taka is Donate For Flood at Noakhali.New Balance for Flood:${noaDonate}   Total Balance: ${totalDonation}`; 

// should be a common functiondocument.getElementById('histry').appendChild(p);  
})


//Donate for Flood Relief in Feni

document.getElementById('donatef')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amountf');
    if(isNaN(addDonateM)|| addDonateM <= 0){
        alert('Failed to add money');
        return;
    }
    
    const nDonate = getTextValueById('n-donatef');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donatef').innerText = noaDonate;

    const donationT = getTextValueById('total-donation');
    const totalDonation = addDonateM + donationT;
    document.getElementById('total-donation').innerText = totalDonation;

    
//add history
const p = document.createElement('p');
p.innerText = `${noaDonate} Taka is Donate For Flood Relief In Feni.New Balance for Flood Relief:${noaDonate}  Total Balance: ${totalDonation}`; 

// should be a common function
document.getElementById('histry').appendChild(p);


})


//Aid for Injured in the Quota Movement

document.getElementById('donate-q')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amount-q');
    if(isNaN(addDonateM)|| addDonateM <= 0){
        alert('Failed to add money');
        return;
    }
    const nDonate = getTextValueById('n-donate-q');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donate-q').innerText = noaDonate;

    

    const donationT = getTextValueById('total-donation');
    const totalDonation = addDonateM + donationT;
    document.getElementById('total-donation').innerText = totalDonation;



    
//add history
const p = document.createElement('p');
p.innerText = `${noaDonate} Taka is Donate For Injured People in the Quota Movement.New Balance for Injured People:${noaDonate}   Total Balance: ${totalDonation}`; 

// should be a common function
document.getElementById('histry').appendChild(p);


})

//blog link

document.getElementById("blog-page").addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5501/blog.html"; 

});



