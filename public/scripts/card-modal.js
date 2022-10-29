(() => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        const portfolioContainer = document.querySelector('.portfolio-container');
        const template = portfolioContainer.innerHTML;
        portfolioContainer.innerHTML = '';
    
        const data = JSON.parse(xhr.responseText);
        data.cardData.forEach((card, index, arr) => {
            const newNode = document.createElement('div');
            newNode.innerHTML = template;
            const link = newNode.querySelector('.card-link');
            const modal = newNode.querySelector('.card-modal');
            const image = newNode.querySelector('.card-image');
            const title = newNode.querySelector('.card-title');
    
            link.href = card.url;
            modal.src = card.modal ? card.modal : data.defaultModal;
            image.src = card.image;
            title.innerHTML = card.title;
    
            portfolioContainer.prepend(newNode);
        });
    });
    xhr.open('GET', '/firebase/projects');
    xhr.send();
})();