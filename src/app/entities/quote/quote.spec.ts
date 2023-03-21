import { quoteFactory } from '@test/factories/quote-factory';

describe('Quote', () => {
  it('should be able to create a quote', () => {
    const quote = quoteFactory();

    expect(quote).toBeTruthy();
    expect(typeof quote.id).toBe('string');
  });

  it('should be able to create a quote that already have an id', () => {
    const id = '123456';
    const quote = quoteFactory({}, id);

    expect(quote).toBeTruthy();
    expect(typeof quote.id).toBe('string');
    expect(quote.id).toBe(id);
  });
});
