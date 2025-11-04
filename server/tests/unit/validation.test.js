const { isValidTitle } = require('../../utils/validation');

test('isValidTitle rejects empty', () => {
expect(isValidTitle('')).toBe(false);
});