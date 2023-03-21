import { InMemoryQuotesRepository } from '@test/repositories/in-memory-quotes-repository';
import { GetQuote } from './get-quote';
import { quoteFactory } from '@test/factories/quote-factory';

describe('Get quote', () => {
  it('should be able to get a quote', async () => {
    const quotesRepository = new InMemoryQuotesRepository();
    const getQuote = new GetQuote(quotesRepository);

    await quotesRepository.create(
      quoteFactory(
        {
          quote: 'Test1',
          media: 'Test1',
          character: 'John Doe1',
        },
        1,
      ),
    );
    await quotesRepository.create(
      quoteFactory(
        {
          quote: 'Test2',
          media: 'Test2',
          character: 'John Doe2',
        },
        2,
      ),
    );
    await quotesRepository.create(
      quoteFactory(
        {
          quote: 'Test3',
          media: 'Test3',
          character: 'John Doe3',
        },
        3,
      ),
    );
    await quotesRepository.create(
      quoteFactory(
        {
          quote: 'Test4',
          media: 'Test4',
          character: 'John Doe4',
        },
        4,
      ),
    );
    await quotesRepository.create(
      quoteFactory(
        {
          quote: 'Test5',
          media: 'Test5',
          character: 'John Doe5',
        },
        5,
      ),
    );

    const { quote } = await getQuote.execute();

    expect(quotesRepository.quotes).toHaveLength(5);
    expect(quote).toBeTruthy();
  });

  it('should not be able to get a non existing quote', async () => {
    const quotesRepository = new InMemoryQuotesRepository();
    const getQuote = new GetQuote(quotesRepository);

    expect(() => {
      return getQuote.execute();
    }).rejects.toThrowError('Quote not found.');
  });
});
