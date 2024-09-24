//Donate for Flood at Noakhali

document.getElementById('donate')
.addEventListener('click', function (event){
    event.preventDefault();

    const addDonateM = getValueById('donate-amount');
    const donationT = getTextValueById('total-donation');
    if(isNaN(addDonateM)|| addDonateM <= 0 || addDonateM > donationT ){
        alert('Failed to add money');
        return;
    }

    

    const nDonate = getTextValueById('n-donate');

    const noaDonate = addDonateM + nDonate;

    document.getElementById('n-donate').innerText = noaDonate ;
        
    
    const totalDonation = donationT - addDonateM;
    document.getElementById('total-donation').innerText = totalDonation;
    my_modal_1.showModal();

   
    

    
//add history
const dateT = getTime();
const p = document.createElement('p');
p.classList.add('shadow-xl','bg-green-300','h-20','font-bold','py-2');
p.innerText = `${noaDonate} Taka is Donate For Flood at Noakhali. New Balance for Flood:${noaDonate},Total Balance: ${totalDonation} 
Time: ${dateT}`; 
 
 

document.getElementById('contain').appendChild(p);  
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
    const totalDonation = donationT - addDonateM;
    document.getElementById('total-donation').innerText = totalDonation;
    my_modal_2.showModal();

    
//add history
const dateT = getTime();
const p = document.createElement('p');
p.classList.add('shadow-xl','bg-green-300','h-20','font-bold','py-2');
p.innerText = `${noaDonate} Taka is Donate For Flood Relief In Feni.New Balance for Flood Relief:${noaDonate},Total Balance: ${totalDonation}
Time: ${dateT}`; 


document.getElementById('contain').appendChild(p);


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
    const totalDonation = donationT - addDonateM;
    document.getElementById('total-donation').innerText = totalDonation;
    my_modal_3.showModal();



    
//add history
const dateT = getTime();
const p = document.createElement('p');
p.classList.add('shadow-xl','bg-green-300','h-20','font-bold','py-2');
p.innerText = `${noaDonate} Taka is Donate For Injured People in the Quota Movement.New Balance for Injured People:${noaDonate},Total Balance: ${totalDonation}
Time: ${dateT}`; 

document.getElementById('contain').appendChild(p);


})

//blog link

document.getElementById("blog-page").addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5501/blog.html"; 

});



