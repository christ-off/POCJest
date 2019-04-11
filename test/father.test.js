'use strict';

const tested = require('../src/father');

describe('Testing Father with Son', () => {

    test('should say', () => {
        // When
        let say = tested.says();
        // Then
        expect(say).toBe("Son says 42 and I say 13");
    });

});