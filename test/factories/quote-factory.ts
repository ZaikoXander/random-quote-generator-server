import { Quote, QuoteProps } from '@app/entities/quote/quote';

type Override = Partial<QuoteProps>;

export function quoteFactory(override: Override = {}, id?: number) {
  return new Quote(
    {
      quote: 'Test quote',
      media: 'Test movie',
      character: 'John Doe',
      ...override,
    },
    id,
  );
}
