'use strict';

const son = require('./son');

exports.saysWithSon = () => {
    return "-- Father : I am your father " + son.says();
};

exports.saysToSon = ( callback ) => {
    son.reply( (sonsaid) => callback("-- Father : I am your father " + sonsaid));
};