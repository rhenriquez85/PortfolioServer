'use strict';

const RESOURCES = {
    PUBLIC: {
        PAGES: {
            HOME: './public/pages/home.html',
        },
        STYLES: {
            RESET: './public/styles/reset.css',
            STYLES: './public/styles/styles.css',
        },
        IMAGES: {
            SMOOTHIE: './public/images/smoothie.jpg',
            LIBRARY: './public/images/library.jpeg',
            GO: './public/images/go.png',
        },
        SCRIPTS: {
            CARD_MODAL: './public/scripts/card-modal.js',
        },
    }
};

const PATHS = {
    HOME: ['', '/', '/home'],
    STYLES: ['/reset.css', '/styles.css'],
    IMAGES: ['/smoothie.jpg', '/library.jpeg', '/go.png'],
    SCRIPTS: ['/card-modal.js'],
};

module.exports = { RESOURCES, PATHS };