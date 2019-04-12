'use strict';

const tested = require('../src/father');

describe('Testing Father with Son', () => {

    test('Father to Son in Sync', () => {
        // When
        let say = tested.saysWithSon();
        // Then
        expect(say).toBe("-- Father : I am your father -- Son : Nooo");
    });

    test('Father to Son in ASync', (done) => {
        // When
        function callback(data) {
            expect(data).toBe("-- Father : I am your father -- I say : Noo");
            done();
        }
        tested.saysToSon(callback);
        // Then

    });

});