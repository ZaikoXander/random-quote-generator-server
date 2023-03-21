import { quoteFactory } from '@test/factories/quote-factory';

describe('Quote', () => {
  it('should be able to create a quote', () => {
    const quote = quoteFactory();

    expect(quote).toBeTruthy();
    expect(quote.id).toBe(undefined);
  });

  it('should be able to create a quote that have an id', () => {
    const id = 147;
    const quote = quoteFactory({}, id);

    expect(quote).toBeTruthy();
    expect(typeof quote.id).toBe('number');
    expect(quote.id).toBe(id);
  });
});
