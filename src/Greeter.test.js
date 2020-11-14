import { Greeter } from './Greeter';

describe('Greeter', () => {
  const greeter = new Greeter();

  it('should say hello and name', () => {
    expect(greeter.greet('Beth')).toEqual('Hello Beth');
  });
});
