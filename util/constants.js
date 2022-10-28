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
        }
    }
};

const PATHS = {
    HOME: ['', '/', '/home'],
    STYLES: ['/reset.css', '/styles.css'],
    IMAGES: ['/smoothie.jpg', '/library.jpeg'],
};

module.exports = { RESOURCES, PATHS };