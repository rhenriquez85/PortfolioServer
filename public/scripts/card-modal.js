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
            const screenModal = document.querySelector('.screen-modal');
                
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

		const mediaQueries = getMediaQueries('styles.css');		

        // const toggleClass = (selector, className) => {
        //     const elements = document.querySelectorAll(selector);
        //     for (const element in elements) {
        //         const el = elements[element];
        //         if (el.className)
        //             el.classList.contains(className) ? el.classList.remove(className) : el.classList.add(className);
        //     }
        //     // window.alert(className);
        // };

        // const toggleLinks = () => {
        //     const elements = document.querySelectorAll(selector);
        //     for (const element in elements) {
        //         const el = elements[element];
        //             if (el.href)
        //                 el.href = 'javascript:void(0)';
        //     }
        // }
            
		const handleShowInfoModal = (e) => {
            //    window.alert('show');
                e.stopPropagation();
                info.style.opacity = 1;
                info.style.transitionProperty = 'opacity';
                info.style.transitionDuration = '.5s';
                info.style.zIndex = 2;



               //  screenModal.classList.add('modal-active');
               // screenModal.style.zIndex = -1;
                
                // toggleClass('a', 'disabled-anchor');
                // const anchors = document.getElementsByTagName('a');
                // for (let i = 0; i < anchors.length; i++)
                //     anchors[i].classList
            }
            const handleCloseInfoModal = (e) => {
            //    window.alert(`close ${e.target.className}`);
                e.stopPropagation();
		    // if (e.target.closest(`.${info.className}`)) return;
		    	info.style.opacity = 0;
                info.style.transitionDuration = '0s';
                info.style.zIndex = -1;

                //screenModal.style.zIndex = 2;
                //screenModal.classList.remove('modal-active');
                // toggleClass('a', 'disabled-anchor');
            };

            // const toggleInfoMediaEvent = new Event('toggleMediaInfo');
            const showInfoMediaEvent = new Event('showInfoMedia');
            const closeInfoMediaEvent = new Event('closeInfoMedia');
            const toggleInfoModal = (e) => {
            for (const query of mediaQueries) {
                if (window.matchMedia(query).matches && ![showInfoMediaEvent, closeInfoMediaEvent].includes(e)) return;
            }
            // window.alert(111);
                e.stopPropagation();
                    info.style.zIndex == 2 ? handleCloseInfoModal(e) : handleShowInfoModal(e);
            };
            const toggleInfoModalMedia = (e) => {
//                if (!e.target.closest('.' + info.className) && info.style.zIndex == 2) return;
                // if (e === closeInfoMediaEvent && info.style.zIndex != 2) return;
                // window.alert(JSON.stringify(e.target.closest(`.${info.className}`)));
                if (e === closeInfoMediaEvent && info.style.zIndex != 2) return;
                
		e === showInfoMediaEvent && screenModal.classList.add('modal-active');
		e === closeInfoMediaEvent && screenModal.classList.remove('modal-active');
                toggleInfoModal(e);
            }
            title.addEventListener('mouseenter', toggleInfoModal);
            title.addEventListener('mouseleave', toggleInfoModal);
            info.addEventListener(showInfoMediaEvent.type, toggleInfoModalMedia);
            info.addEventListener(closeInfoMediaEvent.type, toggleInfoModalMedia);
            // const toggleInfoMediaEvent = new Event('toggleMediaInfo');
            // info.addEventListener(toggleInfoMediaEvent.type, toggleInfoModalMedia);

            //title.addEventListener('mouseleave', handleCloseInfoModal);
            modal.addEventListener('mouseenter', () => {
                image.classList.add('card-blur');
            });
            modal.addEventListener('mouseleave', () => {
                image.classList.remove('card-blur');
            });

            // title.addEventListener('mouseenter', () => {
            //     info.style.opacity = 1;
            //     info.style.transitionProperty = 'opacity';
            //     info.style.transitionDuration = '.5s';
            //     info.style.zIndex = 2;
            // });
            // title.addEventListener('mouseleave', (e) => {
            //     info.style.opacity = 0;
            //     info.style.transitionDuration = '0s';
            //     info.style.zIndex = -1;
            // });

		    // const mediaQueries = getMediaQueries('styles.css');		
    

	//	const mediaQueries = ['(pointer: coarse)', '(pointer: none)', '(max-width: 800px)'];		
			mediaQueries.forEach((query) => {
				if (!window.matchMedia(query).matches) return;
				
		//		title.addEventListener('click', (e) => { e.stopPropagation(); });
                /*
				title.addEventListener('click', (e) => {
					e.stopPropagation();

                    return; 

                    const anchors = document.getElementsByTagName('a');
                    for (let i = 0; i < anchors.length; i++)
                        anchors[i].setAttribute('disabled', true);

					// const event = new Event('mouseenter');
					// title.dispatchEvent(event);
                    // handleShowInfoModal();

				});
                */
					

                const handleCloseInfoModal = (e) => {
			return;
			//window.alert(JSON.stringify(e.target));
                    
                    //window.alert(e.target);

                    if (!e.target.closest(`.${info.className}`) && info.style.opacity === 1) {
                        //window.alert(1);					
                        for (let i = 0; i < anchors.length; i++)
                            anchors[i].setAttribute('disabled', false);
                        title.textContent = 'e.target.className';
                        const closeEvent = new Event('mouseleave');
                        // title.dispatchEvent(closeEvent);
                    }
                }


                title.addEventListener('click', (e) => {
                    e.stopPropagation();
                    info.dispatchEvent(showInfoMediaEvent);
                });


                document.addEventListener('click', (e) => { 
//			e.stopPropagation();
		//	window.alert(`doc ${e.target.className}`);
        //window.alert('123123123');
           //window.alert(e.target.className);

            if (e.target.closest(`.${info.className}`) === info) return;

                    info.dispatchEvent(closeInfoMediaEvent);
//			handleShowInfoModal(e);
		});
                //document.addEventListener('click', handleCloseInfoModal);
               // document.addEventListener('click', (e) => { e.stopPropagation(); });


			});




        });
    });
    
	xhr.open('GET', '/firebase/projects');
    xhr.send();
})();
