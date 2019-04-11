'use strict';

const son = require('./son');

exports.says = () => {
    return son.says() + " and I say 13";
};