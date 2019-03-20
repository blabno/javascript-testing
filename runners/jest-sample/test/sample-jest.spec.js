const add = (a, b) => a + b;

describe('add', () => {
  describe('when a is 2 and b is 3', () => {
    it('should return 5', () => expect(add(2, 3)).toEqual(5));
  });
});
