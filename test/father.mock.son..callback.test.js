'use strict';

const tested = require('../src/father');
const son = require('../src/son');

jest.mock('../src/son');

describe('Testing Father with Son', () => {

    test('should say', (done) => {
        // Given
        son.reply.mockImplementation( (callback) => { callback("XXXX"); });
        // When
        function callback(data) {
            expect(data).toBe("-- Father : I am your father XXXX");
            done();
        }
        tested.saysToSon(callback);
        // Then

    });

});