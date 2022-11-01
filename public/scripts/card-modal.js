'use strict';

(() => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        const portfolioContainer = document.querySelector('.portfolio-container');
        const template = portfolioContainer.innerHTML;
        portfolioContainer.innerHTML = '';
    
        const data = JSON.parse(xhr.responseText);
        data.cardData.forEach((card, index, arr) => {
            if (!card.display) return;
            const newNode = document.createElement('div');
            newNode.innerHTML = template;
            const link = newNode.querySelector('.card-link');
            const modal = newNode.querySelector('.card-modal');
            const image = newNode.querySelector('.card-image');
            const title = newNode.querySelector('.card-title');
            const info = newNode.querySelector('.card-info');
            const infoDesc = info.querySelector('.card-info-description');
            const infoDetails = info.querySelector('.card-info-details');
                
            link.href = card.url;
            modal.src = card.modal ? card.modal : data.defaultModal;
            image.src = card.image;
            title.textContent = card.title;

	        const cardDesc = card.description;
	        const cardDetails = card.details;
	        const regEx = /^[^,.;]*:\s/;
	        const titleDesc = cardDesc.match(regEx);
	        const titleDetails = cardDetails.match(regEx);
	        const titleHtml = '<strong class="card-info-title">@replace@</strong>';
	        infoDesc.innerHTML = titleDesc !== -1 ? 
	    	    cardDesc.replace(titleDesc[0], titleHtml.replace('@replace@', titleDesc[0])) : 
	    	    cardDesc;
	        infoDetails.innerHTML = titleDetails !== -1 ? 
	    	    cardDetails.replace(titleDetails[0], titleHtml.replace('@replace@', titleDetails[0])) : 
	    	    cardDetails;

            portfolioContainer.prepend(newNode);

            modal.addEventListener('mouseenter', () => {
                image.classList.add('card-blur');
            });
            modal.addEventListener('mouseleave', () => {
                image.classList.remove('card-blur');
            });
            title.addEventListener('mouseenter', () => {
                info.style.opacity = 1;
                info.style.transitionProperty = 'opacity';
                info.style.transitionDuration = '.5s';
                info.style.zIndex = 2;
            });
            title.addEventListener('mouseleave', () => {
                info.style.opacity = 0;
                info.style.transitionDuration = '0s';
                info.style.zIndex = -1;
            });

		    // const mediaQueries = getMediaQueries('styles.css');		
    		const mediaQueries = ['(pointer: coarse)', '(pointer: none)', '(max-width: 800px)'];		
			mediaQueries.forEach((query) => {
				if (!window.matchMedia(query).matches) return;
				console.log(window.matchMedia(query));
				title.addEventListener('click', () => {
					const event = new Event('mouseenter');
					title.dispatchEvent(event);
				})
			});


        });
    });
    xhr.open('GET', '/firebase/projects');
    xhr.send();
})();
