'use strict';

const { initializeApp } = require('firebase/app') ;
const { getDatabase, ref, get } = require('firebase/database');
const { FIREBASE } = require('../util/constants').STORAGE;

const app = initializeApp(FIREBASE.CONFIG);
const db = getDatabase(app);
const dbRef = ref(db, 'projects');

const getData = (cb) => {
    get(dbRef).then((snapshot) => {
        cb(snapshot.val());
    }).catch((err) => {
        console.error(err);
    });
};

module.exports = { getData };