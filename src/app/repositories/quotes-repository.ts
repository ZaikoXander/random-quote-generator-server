import { Quote } from '@app/entities/quote/quote';

export abstract class QuotesRepository {
  abstract create(quote: Quote): Promise<void>;
  abstract findById(quoteId: number): Promise<Quote | null>;
  abstract countMany(): Promise<number>;
}
