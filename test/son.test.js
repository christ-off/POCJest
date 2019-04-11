'use strict';

const tested = require('../src/son');

describe('Testing Son', () => {

    test('should say', () => {
        // When
        let say = tested.says();
        // Then
        expect(say).toBe("Son says 42");
    });

});