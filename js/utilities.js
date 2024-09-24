function getValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id){
    
    document.getElementById('card-container').classList.add('hidden');

    document.getElementById('histry').classList.add('hidden');
    
    
    document.getElementById(id).classList.remove('hidden');  

}

function getTime(){
    const currentTime = new Date ();
    const formatedTime = `${currentTime} `
    return formatedTime
}

const header = document.querySelector('header');

  function toggleBlurOnScroll() {
    if (window.scrollY > 0) {
      header.classList.add('backdrop-blur-md', 'bg-opacity-60');
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-opacity-60');
    }
  }

  window.addEventListener('scroll', toggleBlurOnScroll);


