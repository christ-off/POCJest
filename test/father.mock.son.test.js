'use strict';

const father = require('../src/father');
const son = require('../src/son');

jest.mock('../src/son');

describe('Testing Father with Son', () => {

    test('should say', () => {
        // Given
        son.says.mockImplementation( () => "XXXX");
        // When
        let say = father.saysWithSon();
        // Then
        expect(say).toBe("-- Father : I am your father XXXX");
    });

});