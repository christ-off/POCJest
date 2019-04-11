'use strict';

const father = require('../src/father');
const son = require('../src/son');

jest.mock('../src/son');

describe('Testing Father with Son', () => {

    test('should say', () => {
        // Given
        son.says.mockImplementation( () => "Mocked");
        // When
        let say = father.says();
        // Then
        expect(say).toBe("Mocked and I say 13");
    });

});