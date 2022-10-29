(() => {
    const defaultModal = 'go.png';
    const cardData = [
        {
            title: 'NodeLibraryApp',
            url: 'http://www.r3seprojects.com/info',
            image: 'library.jpeg',
            display: true,
        },
        {
            title: 'ReactSmoothieApp',
            url: 'http://www.r3seprojects.com',
            image: 'smoothie.jpg',
            display: true,
        },
    ];
    const data = {
        defaultModal,
        cardData,
    };

    const portfolioContainer = document.querySelector('.portfolio-container');
    const template = portfolioContainer.innerHTML;
    portfolioContainer.innerHTML = '';

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
})();