'use strict';

const RESOURCES = {
    PUBLIC: {
        IMAGES: {
            SMOOTHIE: './public/images/smoothie.jpg',
            LIBRARY: './public/images/library.jpeg',
            GO: './public/images/go.png',
        },
        PAGES: {
            HOME: './public/pages/home.html',
        },
        SCRIPTS: {
            HELPERS: './public/scripts/helpers.js',
            CARD_MODAL: './public/scripts/card-modal.js',
        },
        STYLES: {
            RESET: './public/styles/reset.css',
            STYLES: './public/styles/styles.css',
        },
    }
};

const PATHS = {
    HOME: ['', '/', '/home'],
    IMAGES: ['/smoothie.jpg', '/library.jpeg', '/go.png'],
    SCRIPTS: ['/helpers.js', '/card-modal.js'],
    STYLES: ['/reset.css', '/styles.css'],
    STORAGE: ['/firebase/projects'],
};

const STORAGE = {
    FIREBASE: {
        CONFIG: {
            apiKey: "AIzaSyDKqESbivNuCoPjKPKQDNhu9vHoyiUQ9LY",
            authDomain: "r3seprojects-4565f.firebaseapp.com",
            databaseURL: "https://r3seprojects-4565f-default-rtdb.firebaseio.com",
            projectId: "r3seprojects-4565f",
            storageBucket: "r3seprojects-4565f.appspot.com",
            messagingSenderId: "303103807068",
            appId: "1:303103807068:web:6f86d707107fe27ab9e099",
            measurementId: "G-2MVTH30Q7V"
        }
    }
};

module.exports = { RESOURCES, PATHS, STORAGE };