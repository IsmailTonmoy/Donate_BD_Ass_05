document.getElementById('show-card-container')
    .addEventListener('click', function () {
        showSectionById('card-container');
        document.getElementById('show-card-container').classList.add('bg-[#B4F461]'); 
        document.getElementById('show-T-history').classList.remove('bg-[#B4F461]');
        
        
        return;
    });


document.getElementById('show-T-history')
    .addEventListener('click', function () {
        showSectionById('histry');
        document.getElementById('show-card-container').classList.remove('bg-[#B4F461]'); 
        document.getElementById('show-T-history').classList.add('bg-[#B4F461]');

        
        return;
    });

    